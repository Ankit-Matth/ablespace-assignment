"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Subcategory {
  name: string;
  slug: string;
  product_count: number;
}

interface Category {
  id: number;
  title: string;
  subcategories: Subcategory[];
}

interface NavigationData {
  id: number;
  title: string;
  slug: string;
  last_scraped_at: string;
  categories: Category[];
}

interface ApiResponse {
  data: NavigationData[];
  isFallback: boolean;
}

export default function Home() {
  const [navigationHeadings, setNavigationHeadings] = useState<NavigationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchNavigationData = async () => {
      try {
        const response = await fetch("/api/navigation");
        if (!response.ok) throw new Error("Network error");
        const result: ApiResponse = await response.json();
        setNavigationHeadings(result.data);
        if (result.isFallback) {
          alert("Fallback data is being displayed because scraping failed.");
        }
      } catch (error) {
        console.error("Failed to fetch navigation data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNavigationData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-lg">Loading navigation...</div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] bg-gray-50 pt-12 flex flex-col items-center">
      <div className="text-3xl mb-10">Navigation headings</div>

      <div
        onMouseEnter={() => {}}
        onMouseLeave={() => setActiveIndex(null)}
        className="w-full flex flex-col items-center"
      >
        <div className="flex justify-center items-center space-x-8 py-4 bg-white shadow-sm rounded-full px-6">
          {navigationHeadings.map((ele, index) => (
            <div
              key={ele.id}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <Link
                href={`/products${ele.slug}`}
                className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition px-4 py-2"
              >
                {ele.title}
              </Link>
            </div>
          ))}
        </div>

        {activeIndex !== null && navigationHeadings[activeIndex].categories.length > 0 && (
          <div className="w-full bg-white shadow-xl border-t mt-0.5 py-8 px-10">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
              {navigationHeadings[activeIndex].categories.map((category) => (
                <div key={category.id}>
                  <h3 className="font-bold text-gray-900 mb-3 text-base border-b pb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {category.subcategories.map((subcat) => (
                      <li key={subcat.slug}>
                        <Link
                          href={`/products${subcat.slug}`}
                          className="block hover:text-blue-500 hover:translate-x-1 transition-transform duration-200"
                        >
                          {subcat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
