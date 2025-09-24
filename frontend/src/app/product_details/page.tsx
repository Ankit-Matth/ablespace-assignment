'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import ProductCard, { Product } from '@/components/ProductCard';

interface ProductDetails {
  id: number;
  title: string;
  author: string;
  price: string;
  image_url: string;
  source_url: string;
  description: string;
  specs: Record<string, string>; 
  last_scraped_at: string;
  recommendedProducts: Product[];
}

interface ProductDetailsApiResponse {
  data: ProductDetails;
  isFallback: boolean;
}

const formatSpecKey = (key: string): string => {
  return key
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ProductDetailsPageContent = () => {
  const searchParams = useSearchParams();
  const sourceUrl = searchParams.get('sourceUrl');
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sourceUrl) {
      setError('No product source URL provided.');
      setIsLoading(false);
      return;
    }

    const fetchProductDetails = async () => {
      setIsLoading(true);
      setError(null); 
      try {
        const response = await fetch(`/api/get-product-details?sourceUrl=${encodeURIComponent(sourceUrl)}`);
        const result: ProductDetailsApiResponse = await response.json();
        if (!response.ok) {
          throw new Error(result.data.error || 'Failed to fetch product details');
        }
        setProduct(result.data);
        if (result.isFallback) {
          alert("Fallback data is being displayed because scraping failed.");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [sourceUrl]);

  if (isLoading) {
    return <div className="text-center p-10">Loading product details...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-center p-10">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-96">
          {product.image_url && (
            <Image
              src={product.image_url}
              alt={product.title}
              fill 
              className="rounded-lg object-contain"
            />
          )}
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {product.author}</p>
          <p className="text-3xl font-bold text-gray-800 mb-4">{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Specifications</h3>
            <ul className="list-disc list-inside text-gray-600">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key}>
                  <strong>{formatSpecKey(key)}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>

          <a href={product.source_url} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
            View on Original Site
          </a>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Recommended Products</h2>
        {product.recommendedProducts?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.recommendedProducts.map((recommendedProduct) => (
              <ProductCard key={recommendedProduct.id || recommendedProduct.source_url} product={recommendedProduct} />
            ))}
          </div>
        ) : (
          <p>No recommended products available.</p>
        )}
      </div>
    </div>
  );
};

export default function ProductDetailsPage() {
    return (
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <ProductDetailsPageContent />
      </Suspense>
    );
  }