
import React from 'react';
import { Link } from 'react-router-dom';
import { vision, mission } from '../constants/companyInfo';
import { products } from '../constants/products';
import { communityPrograms } from '../constants/communityPrograms';
import ProductCard from '../components/ProductCard';

const featuredProducts = products.slice(0, 4);

const HomePage: React.FC = () => {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" src="./banner.png" alt="Pharmaceutical background"/>
                    <div className="absolute inset-0 bg-teal-800 opacity-60"></div>
                </div>
                <div className="relative container mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Candrelia Farma</h1>
                    <p className="mt-4 text-xl text-teal-100 font-light">Health, Quality, Trust</p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link to="/products" className="bg-white text-teal-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all">Produk Kami</Link>
                        <Link to="/profile" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-teal-700 transition-all">Tentang Kami</Link>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Produk Unggulan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/products" className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition-all">
                        Lihat Semua Produk
                    </Link>
                </div>
            </section>

            {/* Vision and Mission */}
            <section className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi Kami</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">{vision}</p>
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Misi Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mission.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 mx-auto mb-4">
                                    <span className="font-bold text-xl">{index + 1}</span>
                                </div>
                                <p className="text-gray-600">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Programs */}
            <section>
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Kegiatan Kemasyarakatan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {communityPrograms.map((program) => (
                        <Link to={`/community/${program.slug}`} key={program.slug} className="block bg-white rounded-lg shadow-lg overflow-hidden group">
                            <div className="overflow-hidden">
                                <img src={program.imageUrl} alt={program.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">{program.title}</h3>
                                <p className="mt-2 text-gray-600">{program.description}</p>
                                <span className="inline-block mt-4 text-teal-600 font-semibold group-hover:underline">
                                    Baca Selengkapnya &rarr;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;