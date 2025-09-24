"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";
import ProductCard, { Product } from "@/components/ProductCard";

interface ProductsApiResponse {
  data: Product[];
  isFallback: boolean;
}

const ProductsPageContent = () => {
  const params = useParams();
  const slugArray = params.slug as string[] | undefined; 
  const categorySlug = slugArray ? slugArray.join("/") : "";

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categorySlug) {
      setIsLoading(false);
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/get-products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ categorySlug }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const result: ProductsApiResponse = await response.json();
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
  }, [categorySlug]);

  if (isLoading) {
    return <div className="text-center p-10">Loading products for &quot;{categorySlug}&quot;...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {categorySlug ? `Products for: ${categorySlug.replace(/\//g, " / ")}` : "Please select a categorySlug"}
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center p-10 bg-gray-50 rounded-lg">
          <p>No products found for this categorySlug.</p>
        </div>
      )}
    </div>
  );
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading categorySlug...</div>}>
      <ProductsPageContent />
    </Suspense>
  );
}
