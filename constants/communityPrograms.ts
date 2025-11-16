import type { CommunityProgram } from '../types';

export const communityPrograms: CommunityProgram[] = [
    {
        slug: "peduli-sehat",
        title: "Program Candrelia Peduli Sehat",
        description: "Bakti Sosial Pemeriksaan Kesehatan Gratis & Edukasi Kesehatan untuk masyarakat.",
        fullDescription: `Deskripsi Kegiatan:
- Pemeriksaan kesehatan gratis (tekanan darah, gula darah, kolesterol)
- Konsultasi kesehatan dengan apoteker dan tenaga medis
- Edukasi penggunaan obat yang benar dan pola hidup sehat
- Pembagian sample produk vitamin dan masker

Gambar. 3 Tim Candrelia Farma Sedang Memeriksa Tensi Warga`,
        imageUrl: "./peduli.jpeg"
    },
    {
        slug: "hijau-lestari",
        title: "Program Candrelia Hijau Lestari",
        description: "Penanaman 1000 Pohon & Edukasi Lingkungan Sehat untuk masa depan yang lebih hijau.",
        fullDescription: `Deskripsi Kegiatan:
- Penanaman pohon di area terbuka hijau
- Workshop lingkungan hidup dan daur ulang
- Pembagian bibit tanaman obat keluarga (TOGA)
- Pembersihan sungai/sarana publik

Gambar 4 Karyawan Candrelia Farma bersama masyarakat menanam pohon`,
        imageUrl: "./lestari.jpeg"
    },
    {
        slug: "peduli-pendidikan",
        title: "Program Candrelia Peduli Pendidikan",
        description: "Pemberian Beasiswa Pendidikan & Donasi Buku untuk Anak Tidak Mampu.",
        fullDescription: `Deskripsi Kegiatan:
- Pemberian beasiswa untuk siswa berprestasi
- Donasi buku dan peralatan sekolah
- Workshop motivasi belajar untuk anak-anak
- Renovasi perpustakaan/sarana belajar

Gambar 5 Serah terima beasiswa dan buku`,
        imageUrl: "./pendidikan.jpeg"
    }
];
