import Image from 'next/image';
import Link from 'next/link';

export interface Product {
  id: number;
  title: string;
  author: string;
  price: string;
  image_url: string;
  source_url: string;
  last_scraped_at: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform hover:scale-105">
      <div className="relative w-full h-72">
        <Image
          src={product.image_url}
          alt={product.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.title}</h3>
        <p className="text-gray-600 text-sm">by {product.author}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-800">{product.price}</span>
          <Link href={`/product_details?sourceUrl=${encodeURIComponent(product.source_url)}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;