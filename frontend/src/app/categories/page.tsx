"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Subcategory {
  name: string;
  slug: string;
  product_count: number;
}

interface Category {
  id: number;
  navigation_id: number;
  slug: string;
  last_scraped_at: string;
  title: string;
  subcategories: Subcategory[];
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/get-categories");
        if (!response.ok) {
          throw new Error("Failed to fetch data from the server.");
        }
        const data = await response.json();
        console.log("Fetched categories:", data);
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Could not load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); 

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 animate-pulse">
          Loading Categories...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 text-center">
        <div>
          <h1 className="text-3xl font-bold text-red-600">An Error Occurred</h1>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Explore Categories
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Navigate through different sections and discover books, music, and more.
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No categories found.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => (
              <section key={category.id}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                  {category.title}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      href={`/products${subcategory.slug}`}
                      key={subcategory.slug}
                      className="group block" 
                    >
                      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center h-full">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {subcategory.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                          {subcategory.product_count > 0
                            ? `${subcategory.product_count} products`
                            : "View products"}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}