import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { communityPrograms } from '../constants/communityPrograms';

const CommunityProgramDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const program = communityPrograms.find(p => p.slug === slug);

    if (!program) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold text-gray-800">Program Tidak Ditemukan</h1>
                <p className="text-gray-600 mt-4">Maaf, kami tidak dapat menemukan program komunitas yang Anda cari.</p>
                <Link to="/" className="mt-8 inline-block bg-teal-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-700 transition-all">
                    Kembali ke Beranda
                </Link>
            </div>
        );
    }
    
    const whatsappMessage = `Halo, saya ingin bertanya tentang program ${program.title}.`;
    const whatsappUrl = `https://wa.me/6282289942035?text=${encodeURIComponent(whatsappMessage)}`;

    // Parse the full description to separate activities and image caption
    const descriptionParts = program.fullDescription.split('\n\n');
    const activitiesText = descriptionParts[0];
    const imageCaption = descriptionParts.length > 1 ? descriptionParts[1] : null;

    const activityItems = activitiesText
        .replace('Deskripsi Kegiatan:\n', '')
        .split('\n')
        .map(item => item.trim())
        .filter(item => item.startsWith('-'));

    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="mb-6">
                <Link to="/" className="text-teal-600 hover:text-teal-800 transition-colors">
                    &larr; Kembali ke Beranda
                </Link>
            </div>
            <div>
                <img src={program.imageUrl} alt={program.title} className="w-full h-64 md:h-80 rounded-lg shadow-md object-cover mb-8" />
                <h1 className="text-4xl font-bold text-gray-800">{program.title}</h1>
                <p className="text-lg text-gray-500 mt-2 mb-6">{program.description}</p>
                
                <div className="border-t pt-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detail Program</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                        {activityItems.map((item, index) => (
                            <li key={index}>{item.replace(/^- /, '')}</li>
                        ))}
                    </ul>
                    {/* {imageCaption && (
                        <p className="text-center text-gray-500 italic mt-6">{imageCaption.trim()}</p>
                    )} */}
                </div>

                <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 block w-full text-center bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-all shadow-md"
                >
                    Hubungi Kami
                </a>
            </div>
        </div>
    );
};

export default CommunityProgramDetailPage;
