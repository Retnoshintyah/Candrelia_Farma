
import React from 'react';
import { Link } from 'react-router-dom';

const OrganizationChartPage: React.FC = () => {
    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <div className="mb-6 flex justify-between items-center">
                 <h1 className="text-3xl font-bold text-gray-800">Bagan Organisasi</h1>
                <Link to="/profile" className="text-teal-600 hover:text-teal-800 transition-colors">
                    &larr; Kembali ke Profil
                </Link>
            </div>
            <div className="flex justify-center">
                 <img src="./strukturorganisasi.png" alt="Bagan Organisasi Candrelia Farma" className="rounded-lg shadow-lg max-w-full h-auto" />
            </div>
        </div>
    );
};

export default OrganizationChartPage;