import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../constants/products';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold text-gray-800">Produk Tidak Ditemukan</h1>
                <p className="text-gray-600 mt-4">Maaf, kami tidak dapat menemukan produk yang Anda cari.</p>
                <Link to="/products" className="mt-8 inline-block bg-teal-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-700 transition-all">
                    Kembali ke Semua Produk
                </Link>
            </div>
        );
    }

    const whatsappMessage = `Halo, saya ingin bertanya tentang produk ${product.name}.`;
    const whatsappUrl = `https://wa.me/6281271894905?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <div className="mb-6">
                <Link to="/products" className="text-teal-600 hover:text-teal-800 transition-colors">
                    &larr; Kembali ke Produk
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="w-full rounded-lg shadow-md overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                    <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                    <p className="text-lg text-gray-500 mt-2">{product.type}</p>
                    <p className="text-3xl font-bold text-teal-600 my-6">{product.price}</p>
                    
                    <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Deskripsi</h2>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">{product.description}</div>

                    <a 
                        href={whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-8 block w-full text-center bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-all shadow-md"
                    >
                        Hubungi Penjualan
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;