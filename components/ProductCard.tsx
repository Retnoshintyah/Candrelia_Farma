import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-white-50 p-2">
          <img className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" src={product.imageUrl} alt={product.name} />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 flex-grow">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{product.type}</p>
          <p className="text-md font-bold text-teal-600 mt-2">{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;