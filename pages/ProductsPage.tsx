
import React from 'react';
import { products } from '../constants/products';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Produk Kami</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;