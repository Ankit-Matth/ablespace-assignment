"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard, { Product } from "@/components/ProductCard";

interface SearchApiResponse {
  data: Product[];
  isFallback: boolean;
}

const SearchPageContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setIsLoading(false);
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/searchQuery?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }

        const result: SearchApiResponse = await response.json();
        setProducts(result.data);
        if (result.isFallback) {
          alert("Fallback data is being displayed because scraping failed.");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message);
        }
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (isLoading) {
    return <div className="text-center p-10">Searching for &quot;{query}&quot;...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {query ? `Search Results for: &quot;${query}&quot;` : "Please enter a search query"}
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center p-10 bg-gray-50 rounded-lg">
          <p>No results found for &quot;{query}&quot;.</p>
        </div>
      )}
    </div>
  );
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading search results...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
