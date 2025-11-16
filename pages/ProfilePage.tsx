
import React from 'react';
import { Link } from 'react-router-dom';
import { vision, mission, history, organization, qmsSummary } from '../constants/companyInfo';
import type { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h4 className="font-bold text-teal-700">{member.role}</h4>
        <p className="text-gray-700">{member.name}</p>
        {member.departments && (
            <div className="mt-2">
                {member.departments.map(dept => (
                    <span key={dept} className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{dept}</span>
                ))}
            </div>
        )}
    </div>
);


const ProfilePage: React.FC = () => {
    return (
        <div className="space-y-12">
            <h1 className="text-4xl font-bold text-gray-800 text-center">Tentang Candrelia Farma</h1>

            {/* History Section */}
            <section>
                <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-2 mb-6">Sejarah Kami</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                    {history.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </section>
            
            {/* Vision & Mission */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Visi & Misi</h2>
                 <h3 className="text-2xl font-semibold text-teal-700 mb-3">Visi</h3>
                 <p className="text-gray-600 mb-8">{vision}</p>
                 <h3 className="text-2xl font-semibold text-teal-700 mb-4">Misi</h3>
                 <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {mission.map((item, index) => <li key={index}>{item}</li>)}
                 </ul>
            </section>

            {/* Organizational Structure */}
            <section>
                <div className="flex justify-between items-center border-b-2 border-teal-500 pb-2 mb-6">
                    <h2 className="text-3xl font-semibold text-gray-800">Struktur Organisasi</h2>
                    <Link to="/organization-chart" className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition-all text-sm">
                        Lihat Gambar
                    </Link>
                </div>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Pimpinan Eksekutif</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           {organization.leadership.map(member => <TeamMemberCard key={member.role} member={member} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Tim Manajemen</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {organization.cSuite.map(member => <TeamMemberCard key={member.role} member={member} />)}
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Layout Section */}
            <section>
                <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-2 mb-6">Denah Perusahaan</h2>
                <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
                   <img src="./denahpabrik.png" alt="Denah Perusahaan Candrelia Farma" className="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </section>

            {/* QMS Section
            <section>
                <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-2 mb-6">Sistem Manajemen Mutu (QMS)</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                   <p className="text-gray-600 leading-relaxed">{qmsSummary}</p>
                </div>
            </section> */}
        </div>
    );
};

export default ProfilePage;