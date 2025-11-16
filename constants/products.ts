import type { Product } from '../types';

export const products: Product[] = [
  { id: 1, name: 'Mupiheal', type: 'Ointment', imageUrl: './product/mupiheal.jpeg', price: 'Rp 65.000', description: 'Mupiheal® adalah salep antibiotik topikal yang mengandung Mupirocin 2%, efektif untuk pengobatan infeksi kulit primer dan sekunder seperti impeto, folikulitis, dan luka terinfeksi ringan. Salep ini bekerja dengan menghambat sintesis protein bakteri.' },
  { id: 2, name: 'Esomelab', type: 'Kapsul', imageUrl: './product/esomelab.jpeg', price: 'Rp 120.000', description: 'Esomelab® adalah obat golongan penghambat pompa proton (PPI) yang mengandung Esomeprazole. Obat ini bekerja dengan mengurangi produksi asam lambung secara efektif, sehingga digunakan untuk pengobatan penyakit refluks gastroesofagus (GERD), tukak lambung, dan sindrom Zollinger-Ellison.' },
  { id: 3, name: 'Bactimox', type: 'Suspensi', imageUrl: './product/bactimox.jpeg', price: 'Rp 75.000', description: 'Bactimox® Suspensi adalah antibiotik kombinasi yang mengandung Amoxicillin dan Clavulanic Acid, dirancang khusus untuk anak-anak. Kombinasi ini efektif melawan berbagai bakteri, termasuk yang resisten terhadap Amoxicillin, sehingga cocok untuk infeksi saluran pernapasan, infeksi telinga tengah (otitis media), dan infeksi saluran kemih.' },
  { id: 4, name: 'SOLIP', type: 'Dry Sirup', imageUrl: './product/amoxilab.jpeg', price: 'Rp 50.000', description: `Deskripsi Produk:
SOLIP® adalah sediaan dry syrup yang mengandung Amoksisilin, antibiotik golongan penisilin yang digunakan untuk mengobati infeksi bakteri. SOLIP® digunakan untuk mengatasi infeksi pada saluran pernapasan, saluran kemih, kulit, dan infeksi lainnya yang disebabkan oleh bakteri yang sensitif terhadap amoksisilin.

Komposisi:
Setiap 5 ml larutan sirup SOLIP® mengandung 125 mg Amoksisilin.

Dosis dan Cara Pemakaian:
Anak-anak (2-6 tahun): 2,5 ml, 2-3 kali sehari
Anak-anak (6-12 tahun): 5 ml, 2-3 kali sehari

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Hati-hati pada pasien dengan riwayat alergi terhadap antibiotik golongan penisilin atau beta-laktam.
Penggunaan pada wanita hamil dan menyusui hanya boleh dilakukan atas anjuran dokter.

Kemasan:
Botol dry syrup 30 g (setelah dilarutkan menghasilkan 60 ml larutan).

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya. Setelah larutan disiapkan, simpan dalam lemari pendingin dan gunakan dalam waktu 14 hari.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 5, name: 'Aspartin S.C.', type: 'Injeksi', imageUrl: './product/aspartinsc.jpeg', price: 'Rp 250.000', description: 'Aspartin S.C.® adalah larutan injeksi steril yang mengandung Insulin Aspart, analog insulin manusia kerja sangat cepat. Digunakan untuk mengontrol hiperglikemia pada pasien dewasa dan anak-anak dengan diabetes melitus. Aspartin S.C.® mulai bekerja lebih cepat dan memiliki durasi kerja lebih pendek dibandingkan insulin manusia biasa.' },
  { id: 6, name: 'Zincc', type: 'Suplemen', imageUrl: './product/zincc.jpeg', price: 'Rp 45.000', description: 'Zincc® adalah suplemen tablet yang mengandung Zinc Picolinate untuk penyerapan optimal. Zinc merupakan mineral esensial yang berperan penting dalam menjaga fungsi sistem kekebalan tubuh, mendukung kesehatan kulit dan rambut, serta mempercepat penyembuhan luka.' },
  { id: 7, name: 'Ferrofol', type: 'Tablet kunyah', imageUrl: './product/ferrofol2.jpeg', price: 'Rp 35.000', description: 'Ferrofol® adalah tablet kunyah dengan rasa cokelat yang lezat, mengandung kombinasi Iron (III) Polymaltose Complex dan Asam Folat. Suplemen ini dirancang untuk mencegah dan mengobati anemia defisiensi zat besi dan asam folat, khususnya pada masa kehamilan, menyusui, dan masa pertumbuhan.' },
  { id: 8, name: 'Atoricap', type: 'Salut film', imageUrl: './product/atoricap.jpeg', price: 'Rp 180.000', description: 'Atoricap® adalah tablet salut selaput yang mengandung Atorvastatin Calcium, obat golongan statin yang efektif menurunkan kadar kolesterol total, LDL, dan trigliserida, serta meningkatkan HDL. Obat ini digunakan sebagai tambahan terapi diet untuk mengurangi risiko penyakit kardiovaskular.' },
  { id: 9, name: 'Otoflox', type: 'Tetes telinga', imageUrl: './product/otoflox.jpeg', price: 'Rp 55.000', description: 'Otoflox® adalah larutan tetes telinga steril yang mengandung Ofloxacin 0.3%, antibiotik golongan fluoroquinolone dengan spektrum luas. Obat ini efektif untuk pengobatan otitis eksterna (infeksi liang telinga luar) dan otitis media kronis supuratif yang disebabkan oleh bakteri yang rentan.' },
  { id: 10, name: 'OXYBEL', type: 'Nasal Spray', imageUrl: './product/xylometazoline.jpeg', price: 'Rp 48.000', description: `Deskripsi Produk:
OXYBEL® adalah semprotan hidung yang mengandung Oxymetazoline 0,05%. OXYBEL® efektif untuk meredakan hidung tersumbat akibat pilek, sinusitis, atau alergi.

Komposisi:
Setiap 1 ml OXYBEL® mengandung 0,5 mg Oxymetazoline (0,05%).

Dosis dan Cara Pemakaian:
Dewasa dan Anak-anak (di atas 6 tahun):
Semprotkan 1-2 semprotan ke dalam setiap lubang hidung, 2-3 kali sehari sesuai kebutuhan, tidak lebih dari 3 hari berturut-turut.
Anak-anak (di bawah 6 tahun):
Penggunaan pada anak-anak di bawah usia 6 tahun harus berdasarkan anjuran dokter.

Golongan: Obat Bebas Terbatas (memerlukan petunjuk penggunaan yang tepat)

Perhatian dan Peringatan:
Jangan digunakan pada pasien dengan riwayat tekanan darah tinggi, gangguan jantung, atau masalah pernapasan serius tanpa konsultasi dokter.
Tidak dianjurkan untuk digunakan pada wanita hamil atau menyusui tanpa pengawasan medis.

Kemasan:
Botol semprotan hidung 15 ml.

Penyimpanan:
Simpan pada suhu 15-25°C, terlindung dari cahaya langsung. Pastikan tutup botol tertutup rapat setelah digunakan.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 11, name: 'Aminotran', type: 'Injeksi', imageUrl: './product/aminotran.jpeg', price: 'Rp 310.000', description: 'Aminotran® adalah larutan injeksi yang mengandung Asam Traneksamat, agen antifibrinolitik yang bekerja dengan menghambat pemecahan fibrin. Obat ini digunakan untuk mencegah dan mengobati perdarahan yang disebabkan oleh fibrinolisis berlebih, seperti pada saat dan setelah operasi atau trauma.' },
  { id: 12, name: 'GLUVERA - Dextrose 5%', type: 'Infus', imageUrl: './product/dextrose5.jpeg', price: 'Rp 25.000', description: `Deskripsi Produk:
GLUVERA® adalah larutan infus steril dan isotonik yang mengandung Dextrose 5% dalam air untuk injeksi.
Produk ini berfungsi sebagai sumber energi glukosa, pengganti cairan tubuh yang hilang, serta untuk memelihara keseimbangan cairan dan elektrolit pada pasien yang membutuhkan terapi intravena.
Cocok digunakan dalam kondisi dehidrasi ringan, ketidakseimbangan metabolik, atau terapi nutrisi parenteral.

Komposisi:
Setiap 500 mL larutan mengandung:
Dextrose Monohydrate ………………………… 25,0 g
(setara dengan 5 g/100 mL Dextrose Anhidrat)
Water for Injection (Aqua pro Injectione) …. ad 500 mL
pH larutan: 3,5 – 6,5
Osmolaritas: ≈ 278 mOsm/L (isotonik terhadap plasma)

Dosis dan Cara Pemberian:
Dosis disesuaikan dengan kebutuhan cairan dan energi pasien, berdasarkan berat badan, usia, dan kondisi klinis.
Rute pemberian: intravena melalui sistem infus steril.
Dapat digunakan sebagai larutan pemeliharaan atau sebagai pembawa obat parenteral lain.
Contoh dosis umum:
Dewasa: 500–3000 mL per hari tergantung kebutuhan energi.
Anak-anak: 10–20 mL/kg berat badan per hari.

Golongan:
Obat Keras – Hanya digunakan di bawah pengawasan tenaga medis.

Peringatan dan Perhatian:
Gunakan hanya bila larutan jernih dan wadah utuh.
Pantau kadar glukosa darah secara berkala selama terapi.
Gunakan dengan hati-hati pada pasien dengan diabetes melitus, gagal ginjal, atau gangguan metabolisme karbohidrat.
Hentikan penggunaan bila muncul tanda hiperglikemia, edema, atau intoleransi glukosa.

Kemasan:
Botol infus plastik 500 mL (non-PVC, DEHP-free), steril siap pakai.

Penyimpanan:
Simpan pada suhu 15–30°C, terlindung dari cahaya langsung dan kelembapan tinggi.
Jangan membekukan.
Gunakan segera setelah wadah dibuka dan buang sisa yang tidak terpakai.` },
  { id: 13, name: 'Ringer Acetate Infus', type: 'Infus', imageUrl: './product/ringeracetate.jpeg', price: 'Rp 30.000', description: `Deskripsi Produk:
Ringer Acetate Infus adalah larutan elektrolit yang digunakan untuk menggantikan cairan tubuh dan menyeimbangkan elektrolit pada pasien yang membutuhkan terapi cairan intravena. Ringer Acetate Infus digunakan untuk memberikan rehidrasi pada pasien dan membantu menyeimbangkan kadar elektrolit tubuh.

Komposisi:
Setiap 500 ml larutan infus mengandung:
Calcium chloride dihydrate: 0,28 g
Potassium chloride: 0,30 g
Sodium chloride: 4,25 g
Sodium acetate trihydrate: 3,25 g
Air untuk injeksi ad: 500 ml

Dosis dan Cara Pemakaian:
Dewasa dan Anak-anak: Dosis akan disesuaikan dengan kondisi cairan tubuh pasien, kebutuhan elektrolit, serta evaluasi klinis yang dilakukan oleh dokter.

Golongan:
Obat Keras

Perhatian dan Peringatan:
Pastikan larutan jernih dan bebas dari partikel sebelum digunakan.
Penggunaan harus hati-hati pada pasien dengan gangguan jantung, ginjal, atau pasien yang mengalami edema (pembengkakan).
Tidak dianjurkan pada pasien dengan gangguan fungsi ginjal yang berat atau pasien yang mengalami hiperkalemia.

Kemasan:
Botol infus 500 ml.

Penyimpanan:
Simpan pada suhu 15-30°C, terlindung dari cahaya langsung dan kelembapan tinggi. Setelah dibuka, gunakan sesuai anjuran dokter.` },
  { id: 14, name: 'Natrium Klorida 0.9%', type: 'Infus', imageUrl: './product/natriumklorida09.jpeg', price: 'Rp 22.000', description: `Deskripsi Produk:
Larutan infus Natrium Klorida 0,9% adalah larutan isotonik yang mengandung natrium klorida dalam air untuk injeksi. Obat ini digunakan untuk menggantikan cairan tubuh yang hilang atau untuk menjaga keseimbangan elektrolit pada pasien yang memerlukan rehidrasi atau pengaturan volume cairan tubuh.

Komposisi:
Setiap 500 ml larutan infus mengandung:
Natrium klorida: 4,50 g
Air untuk injeksi ad: 500 ml

Dosis dan Cara Pemakaian:
Dewasa dan anak-anak:
Dosis dapat bervariasi tergantung pada tingkat kehilangan cairan atau pengaturan volume cairan yang dibutuhkan.

Golongan: Obat keras

Perhatian dan Peringatan:
Pastikan larutan jernih dan bebas dari partikel sebelum digunakan.
Penggunaan harus dilakukan dengan hati-hati pada pasien dengan gangguan jantung, ginjal, atau yang memiliki edema (pembengkakan).
Monitor elektrolit dan keseimbangan cairan tubuh selama pemberian infus.

Kemasan:
Botol infus 500 ml.

Penyimpanan:
Simpan pada suhu 15-30°C, terlindung dari cahaya langsung dan kelembapan tinggi. Setelah dibuka, gunakan sesuai anjuran dokter.` },
  { id: 15, name: 'Dextrose 10%', type: 'Infus', imageUrl: './product/Dextrose10.jpeg', price: 'Rp 28.000', description: `Deskripsi Produk:
Dextrose 10% Infus adalah larutan infus yang mengandung glukosa (dextrose) dalam konsentrasi 10%. Larutan ini digunakan untuk memberikan sumber energi yang cepat dan efisien melalui infus intravena. Dextrose 10% Infus membantu menggantikan cairan tubuh yang hilang serta memberikan glukosa yang diperlukan tubuh, terutama pada pasien yang membutuhkan kalori tambahan atau yang mengalami gangguan metabolisme energi.

Komposisi:
Setiap 500 ml larutan infus mengandung:
Glukosa monohydrate: 50,0 g
Air untuk injeksi ad: 500 ml

Dosis dan Cara Pemakaian:
Dewasa dan Anak-anak: Dosis akan disesuaikan dengan tingkat kehilangan cairan tubuh atau kebutuhan energi pasien.

Golongan: Obat Keras

Perhatian dan Peringatan:
Tidak dianjurkan untuk digunakan pada pasien yang mengalami hiperglikemia berat atau yang membutuhkan pembatasan glukosa.
Pastikan larutan tetap jernih dan bebas dari partikel sebelum digunakan.

Kemasan:
Botol infus 500 ml.

Penyimpanan:
Simpan pada suhu 15-30°C, terlindung dari cahaya langsung dan kelembapan tinggi. Setelah dibuka, gunakan sesuai anjuran dokter.` },
  { id: 16, name: 'Amino Acid 7.2%', type: 'Infus', imageUrl: './product/Aminoacid72.jpeg', price: 'Rp 150.000', description: 'Larutan Infus Asam Amino 7.2% adalah nutrisi parenteral yang menyediakan sumber nitrogen dalam bentuk asam amino esensial dan non-esensial. Larutan ini diindikasikan untuk pasien yang memerlukan dukungan nutrisi karena tidak dapat makan secara adekuat, seperti pada kondisi pasca-operasi berat, luka bakar, atau malnutrisi.' },
  { id: 17, name: 'AHEPS Asam Amino 5%', type: 'Infus', imageUrl: './product/AHEPS.jpeg', price: 'Rp 135.000', description: 'AHEPS® (Amino Acid with Histidine, Electrolytes, and Polysorbate) 5% adalah larutan infus nutrisi parenteral yang diformulasikan khusus untuk pasien dengan gangguan fungsi hati. Larutan ini mengandung rasio tinggi Asam Amino Rantai Cabang (BCAA) untuk membantu memperbaiki ensefalopati hepatik.' },
  { id: 18, name: 'Bactozin', type: 'Cream', imageUrl: './product/bactozin.jpeg', price: 'Rp 70.000', description: 'Bactozin® Krim adalah sediaan topikal dengan aksi ganda yang mengandung Miconazole Nitrate (antijamur) dan Neomycin Sulfate (antibakteri). Krim ini efektif untuk mengobati infeksi kulit campuran yang disebabkan oleh jamur dan bakteri, meredakan gejala seperti gatal, kemerahan, dan peradangan.' },
  { id: 19, name: 'Coughrex', type: 'Syrup', imageUrl: './product/coughrex.jpeg', price: 'Rp 40.000', description: 'Sirup Coughrex® adalah obat batuk dengan formula lengkap untuk meredakan batuk berdahak dan tidak berdahak. Mengandung Guaifenesin sebagai ekspektoran, Dextromethorphan HBr sebagai antitusif, dan Chlorphenamine Maleate untuk meredakan gejala alergi.' },
  { id: 20, name: 'Aderma', type: 'Tetes mata', imageUrl: './product/aderma.jpeg', price: 'Rp 60.000', description: 'Aderma® adalah larutan tetes mata steril yang mengandung Tobramycin 0.3%, antibiotik aminoglikosida yang efektif untuk mengobati infeksi bakteri eksternal pada mata dan adneksanya, seperti konjungtivitis. Obat ini bekerja dengan menghentikan pertumbuhan bakteri penyebab infeksi.' },
  { id: 21, name: 'Cardioxin', type: 'Tablet', imageUrl: './product/cardioxin.jpeg', price: 'Rp 95.000', description: 'Cardioxin® adalah tablet yang mengandung Digoxin 0.25 mg, suatu glikosida jantung. Obat ini digunakan dalam pengobatan gagal jantung kongestif dan untuk mengontrol laju ventrikel pada pasien dengan fibrilasi atrium kronis. Cardioxin® bekerja dengan meningkatkan kekuatan kontraksi otot jantung.' },
  { id: 22, name: 'Dermafix', type: 'Cream', imageUrl: './product/dermafix.jpeg', price: 'Rp 58.000', description: 'Dermafix® Krim adalah kortikosteroid topikal potensi sedang yang mengandung Desonide 0.05%. Efektif untuk meredakan manifestasi peradangan dan gatal dari dermatosis yang responsif terhadap kortikosteroid, seperti eksim dan dermatitis atopik.' },
  { id: 23, name: 'VASARTEN', type: 'Tablet', imageUrl: './product/vasarten.jpeg', price: 'Rp 210.000', description: `Deskripsi Produk:
VASARTEN® adalah sediaan tablet yang mengandung Valsartan, yaitu obat yang digunakan untuk mengobati hipertensi (tekanan darah tinggi) dan gagal jantung.

Komposisi:
Setiap tablet VASARTEN® mengandung 160 mg Valsartan.

Dosis dan Cara Pemakaian:
Dosis harus disesuaikan dengan kondisi klinis pasien dan anjuran dokter.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Hati-hati pada pasien dengan gangguan fungsi hati atau ginjal.
Penggunaan pada wanita hamil dan menyusui harus dilakukan dengan hati-hati, dan hanya jika dianggap sangat perlu oleh dokter.

Kemasan:
1 Strip x 10 Tablet

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 24, name: 'CLARYNE', type: 'Sirup', imageUrl: '/product/Claryne.jpeg', price: 'Rp 42.000', description: `Deskripsi Produk:
CLARYNE® adalah sirup antihistamin non-sedatif yang mengandung Fexofenadine Hydrochloride 30 mg per 5 mL, digunakan untuk meredakan gejala alergi seperti bersin-bersin, hidung gatal, mata berair, dan urtikaria (biduran). Fexofenadine merupakan antihistamin generasi kedua yang bekerja cepat menghambat reseptor histamin H₁ tanpa menyebabkan kantuk, sehingga aman digunakan pada siang hari dan tidak mengganggu aktivitas.

Komposisi:
Setiap 5 mL sirup CLARYNE® mengandung:
Fexofenadine Hydrochloride 30 mg
Eksipien: Sorbitol, Propilen Glikol, Natrium Benzoat, Asam Sitrat, Rasa Tutti Frutti, Pewarna Aman, dan Air Murni.

Dosis dan Cara Pemakaian:
Anak-anak (2–6 tahun): 2,5 mL, dua kali sehari.
Anak-anak (6–12 tahun): 5 mL, dua kali sehari.
Dewasa dan anak di atas 12 tahun: 10 mL, sekali sehari atau sesuai anjuran dokter.

Golongan: Obat Bebas Terbatas

Perhatian dan Peringatan:
Gunakan dengan hati-hati pada pasien dengan gangguan ginjal. Hindari konsumsi bersamaan dengan jus buah (seperti jeruk atau apel) karena dapat menurunkan efektivitas obat. Penggunaan pada wanita hamil dan menyusui harus berdasarkan pertimbangan medis.

Kemasan: Botol sirup 60 mL dan 100 mL.

Penyimpanan: Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 25, name: 'GENTAVEX', type: 'Ampul', imageUrl: './product/gentavex.jpeg', price: 'Rp 110.000', description: `Deskripsi Produk:
GENTAVEX® adalah antibiotik injeksi steril yang mengandung Gentamicin Sulfate, suatu aminoglikosida yang bersifat bakterisidal dengan cara menghambat sintesis protein pada bakteri. Obat ini digunakan untuk mengobati berbagai infeksi berat yang disebabkan oleh bakteri gram negatif dan beberapa gram positif, seperti sepsis, infeksi saluran kemih, infeksi saluran napas bawah, infeksi intra-abdomen, serta infeksi kulit dan jaringan lunak.
Formulasi baru GENTAVEX® dirancang dengan stabilisator dan sistem buffer isotonik, untuk meningkatkan kestabilan obat dan mengurangi risiko iritasi pada saat injeksi.

Komposisi:
Setiap vial 2 ml GENTAVEX® mengandung:
Gentamicin Sulfate setara dengan 80 mg Gentamicin (40 mg/ml)
Sodium Acetate 1,0 mg – sebagai buffer pengatur pH
Disodium Edetate (EDTA) 0,05 mg – sebagai agen pengkelat untuk mencegah degradasi logam berat
Water for Injection hingga 2 ml

Dosis dan Cara Pemakaian:
Dewasa: 3–5 mg/kg berat badan per hari, dibagi dalam 2–3 dosis (setiap 8–12 jam).
Anak-anak: 3–5 mg/kg berat badan per hari, dibagi dalam 3 dosis.
Neonatus: 2,5 mg/kg setiap 12 jam.
Dapat diberikan melalui injeksi intravena perlahan atau melalui infus intravena setelah diencerkan dengan larutan infus steril (NaCl 0,9% atau Dextrose 5%).

Golongan:
Obat Keras – hanya dapat digunakan dengan resep dokter dan pengawasan tenaga medis.

Perhatian dan Peringatan:
Gunakan hati-hati pada pasien dengan gangguan ginjal atau pendengaran.
Hindari penggunaan bersamaan dengan obat nefrotoksik atau ototoksik seperti amfoterisin B, siklosporin, dan diuretik kuat.
Pemakaian pada wanita hamil atau menyusui harus atas petunjuk dokter.
Perlu pemantauan kadar serum Gentamicin dan fungsi ginjal selama terapi jangka panjang.

Efek Samping:
Nefrotoksisitas (kerusakan ginjal)
Ototoksisitas (gangguan pendengaran atau keseimbangan)
Reaksi alergi ringan (ruam, gatal)
Sakit kepala atau pusing (jarang)

Kemasan:
Dus berisi 5 vial @ 2 ml GENTAVEX® – Gentamicin Sulfate Injection 40 mg/ml

Penyimpanan:
Simpan pada suhu 15–25°C, terlindung dari cahaya langsung dan kelembapan.
Jangan dibekukan

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 26, name: 'REDUX', type: 'Ampul', imageUrl: './product/tradex.jpeg', price: 'Rp 150.000', description: `Deskripsi Produk:
REDUX® adalah sediaan injeksi intravena yang mengandung Tranexamic Acid, obat hemostatik yang digunakan untuk mengatasi perdarahan akut dan mengurangi risiko perdarahan yang berlebihan.

Komposisi:
Setiap 5 ml injeksi REDUX® mengandung 500 mg Tranexamic Acid.

Dosis dan Cara Pemakaian:
Dewasa:
Perdarahan akut: 10 mg/kg berat badan setiap 8 jam sebagai infus IV selama 3-5 hari
Pasca-operasi atau perdarahan pasca-trauma: 500 mg diberikan melalui injeksi IV selama prosedur, dan diulang sesuai kebutuhan.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Hindari penggunaan pada pasien dengan riwayat tromboemboli atau gangguan koagulasi yang dapat meningkatkan risiko pembekuan darah.
Obat ini harus digunakan dengan hati-hati pada wanita hamil atau menyusui, dan hanya jika manfaatnya lebih besar daripada potensi risiko.

Kemasan:
Ampul 500 mg/5 ml Tranexamic Acid IV Injection.

Penyimpanan:
Simpan pada suhu 15-25°C, terlindung dari cahaya dan kelembapan. Jangan dibekukan.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 27, name: 'GASTRINEX', type: 'Kapsul', imageUrl: './product/gastrinex.jpeg', price: 'Rp 85.000', description: `Deskripsi Produk:
GASTRINEX® adalah sediaan kapsul yang mengandung Omeprazole 20 mg, obat golongan penghambat pompa proton (Proton Pump Inhibitor / PPI) yang bekerja dengan cara menghambat sekresi asam lambung secara spesifik dan efektif. Obat ini digunakan untuk mengobati tukak lambung, tukak duodenum, penyakit refluks gastroesofagus (GERD), serta mencegah kerusakan lambung akibat penggunaan jangka panjang obat antiinflamasi non-steroid (OAINS).

Komposisi:
Setiap kapsul GASTRINEX® mengandung:
Omeprazole 20 mg
Eksipien: Laktosa monohidrat, magnesium stearat, povidone, talk, dan pelapis enterik yang tahan terhadap asam.

Dosis dan Cara Pemakaian:
Umum: 1 kapsul (20 mg) sekali sehari sebelum makan pagi.
Dosis dapat disesuaikan oleh dokter berdasarkan tingkat keparahan penyakit dan respons pasien terhadap terapi.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Gunakan dengan hati-hati pada pasien dengan gangguan fungsi hati. Penggunaan jangka panjang dapat menyebabkan defisiensi vitamin B₁₂ atau magnesium, sehingga disarankan pemeriksaan rutin. Hindari penggunaan bersamaan dengan obat yang dimetabolisme oleh enzim CYP2C19 tanpa pengawasan dokter.

Kemasan: 3 Strip x 10 Kapsul.

Penyimpanan: Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 28, name: 'AMOVEL', type: 'Kapsul', imageUrl: './product/amovel.jpeg', price: 'Rp 90.000', description: `Deskripsi Produk:
AMOVEL® adalah sediaan kapsul yang mengandung Amoksisilin 500 mg, antibiotik spektrum luas dari golongan penisilin semisintetik. Obat ini bekerja dengan menghambat pembentukan dinding sel bakteri, sehingga efektif untuk mengatasi berbagai infeksi bakteri pada saluran pernapasan, saluran kemih, kulit, serta jaringan lunak yang disebabkan oleh mikroorganisme sensitif terhadap amoksisilin.

Komposisi:
Setiap kapsul AMOVEL® mengandung:
Amoksisilin 500 mg
Eksipien: Magnesium stearat, Talk, Povidone, dan Laktosa monohidrat.

Dosis dan Cara Pemakaian:
Dewasa: 1 kapsul (500 mg) setiap 8 jam (3 kali sehari).
Dosis dapat disesuaikan oleh dokter sesuai tingkat keparahan infeksi dan kondisi pasien.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Hindari penggunaan pada pasien dengan alergi terhadap antibiotik golongan penisilin atau sefalosporin. Gunakan dengan hati-hati pada pasien dengan gangguan fungsi hati atau ginjal. Penggunaan jangka panjang harus berada di bawah pengawasan dokter untuk mencegah resistensi bakteri.

Kemasan: 10 Strip x 10 Kapsul.

Penyimpanan: Simpan di tempat kering, terlindung dari cahaya, dan suhu di bawah 30°C.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 29, name: 'ZYFEK', type: 'Kapsul', imageUrl: './product/zyfex.jpeg', price: 'Rp 130.000', description: `Deskripsi Produk:
ZYFEK® adalah sediaan kapsul yang mengandung Cefixime Trihydrate, antibiotik golongan sefalosporin generasi ketiga yang bekerja dengan menghambat sintesis dinding sel bakteri. Obat ini efektif dalam mengatasi berbagai infeksi bakteri, termasuk infeksi saluran pernapasan (seperti bronkitis dan pneumonia), infeksi saluran kemih, infeksi kulit, serta otitis media (radang telinga tengah).

Komposisi:
Setiap kapsul ZYFEK® mengandung:
Cefixime Trihydrate setara dengan Cefixime 100 mg
Eksipien: Laktosa monohidrat, mikrokristalin selulosa, magnesium stearat, natrium kroskarmelosa, titanium dioksida, dan gelatin kapsul.

Dosis dan Cara Pemakaian:
Dewasa dan anak di atas 12 tahun: 200–400 mg per hari, dapat diberikan dalam 1 atau 2 dosis terbagi.
Dosis dapat disesuaikan dengan kondisi klinis dan anjuran dokter.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Hati-hati pada pasien dengan riwayat alergi terhadap sefalosporin atau penisilin.
Gunakan dengan hati-hati pada pasien dengan gangguan fungsi ginjal, dosis perlu disesuaikan.
Hentikan penggunaan bila muncul gejala alergi berat seperti ruam, gatal, atau sesak napas.
Penggunaan jangka panjang dapat menyebabkan pertumbuhan mikroorganisme yang tidak sensitif, termasuk jamur.

Kemasan:
10 Strip x 10 Kapsul

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 30, name: 'BRONZAL', type: 'Tablet', imageUrl: './product/bronzal.jpeg', price: 'Rp 65.000', description: `Deskripsi Produk:
BRONZAL® adalah sediaan tablet yang mengandung Salbutamol Sulfate 4 mg, suatu bronkodilator kerja cepat yang berfungsi untuk melegakan otot polos saluran pernapasan dan mengatasi penyempitan bronkus. Obat ini efektif digunakan untuk meredakan gejala asma bronkial, bronkitis kronis, penyakit paru obstruktif kronik (PPOK), serta gangguan pernapasan lainnya yang menyebabkan sesak atau napas berbunyi (mengi).

Komposisi:
Setiap tablet BRONZAL® mengandung:
Salbutamol Sulfate setara dengan 4 mg Salbutamol
Eksipien: Laktosa monohidrat, Povidone, Magnesium stearat, Maize starch, dan Aerosil.

Dosis dan Cara Pemakaian:
Anak-anak (6–12 tahun): 2 mg (½ tablet), 3–4 kali sehari.
Dewasa dan anak di atas 12 tahun: 1 tablet (4 mg), 3–4 kali sehari.
Dosis dapat disesuaikan oleh dokter berdasarkan tingkat keparahan gejala dan respons pasien.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Gunakan dengan hati-hati pada pasien dengan penyakit jantung, hipertensi, hipertiroidisme, atau diabetes mellitus. Hindari penggunaan bersamaan dengan beta-blocker non-selektif (seperti propranolol) karena dapat menurunkan efek bronkodilatasi. Efek samping yang mungkin muncul meliputi tremor, jantung berdebar, sakit kepala ringan, atau gangguan tidur. Jika gejala menetap atau memburuk, segera konsultasikan dengan dokter.

Kemasan: 1 Strip x 10 Tablet.

Penyimpanan: Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 31, name: 'Bronchonel', type: 'Sirup', imageUrl: './product/bromisin.jpeg', price: 'Rp 52.000', description: `Deskripsi Produk:
Bronchonel® adalah sediaan sirup yang mengandung Ambroxol Hydrochloride, suatu agen mukolitik dan sekretolitik yang bekerja dengan cara mengencerkan dan memecah mukus (dahak) di saluran pernapasan, sehingga memudahkan pengeluarannya dan membantu memperbaiki fungsi pernapasan. Obat ini efektif digunakan untuk meringankan batuk produktif akibat gangguan saluran pernapasan seperti bronkitis akut maupun kronis, pneumonia, asma bronkial, serta penyakit paru obstruktif kronik (PPOK).

Komposisi:
Setiap 5 mL sirup Bronchonel® mengandung 15 mg Ambroxol Hydrochloride.

Dosis dan Cara Pemakaian:
Anak-anak usia 2–6 tahun: 2,5 mL, 2–3 kali sehari.
Anak-anak usia 6–12 tahun: 5 mL, 2–3 kali sehari.
Dewasa dan anak usia di atas 12 tahun: 10 mL, 2–3 kali sehari.

Golongan:
Bronchonel® termasuk dalam golongan obat bebas terbatas, sehingga penggunaannya harus sesuai dengan petunjuk pada kemasan atau anjuran dokter. Penggunaan pada wanita hamil dan menyusui hanya boleh dilakukan bila dianggap sangat diperlukan dan di bawah pengawasan tenaga medis.

Kemasan:
Produk ini dikemas dalam botol sirup 100 mL dan 120 mL dengan rasa frambus manis untuk meningkatkan kepatuhan pasien anak.

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 32, name: 'PUMO', type: 'Dry Sirup', imageUrl: './product/pumo.jpeg', price: 'Rp 88.000', description: `Deskripsi Produk:
PUMO® adalah sediaan suspensi yang mengandung Cotrimoxazole, yaitu kombinasi dua antibiotik, yaitu trimethoprim dan sulfamethoxazole, yang digunakan untuk mengobati berbagai infeksi bakteri. PUMO® efektif untuk mengobati infeksi saluran pernapasan, infeksi saluran kemih, dan infeksi lainnya yang disebabkan oleh bakteri yang sensitif terhadap Cotrimoxazole.

Komposisi:
Setiap 5 ml suspensi PUMO® mengandung 240 mg Cotrimoxazole.

Dosis dan Cara Pemakaian:
Anak-anak (1-5 tahun): 2,5 ml, dua kali sehari
Anak-anak (6-12 tahun): 5 ml, dua kali sehari
Dewasa dan anak di atas 12 tahun: 10 ml, dua kali sehari

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Penggunaan pada wanita hamil dan menyusui hanya boleh dilakukan dengan rekomendasi dokter.
Penggunaan pada bayi yang lebih muda dari 1 bulan tidak dianjurkan.

Kemasan:
Botol suspensi 60 ml.

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya. Setelah dibuka, simpan dalam lemari pendingin dan gunakan dalam waktu 14 hari.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 33, name: 'CEXIL', type: 'Dry Sirup', imageUrl: './product/cefidex.jpeg', price: 'Rp 145.000', description: `Deskripsi Produk:
CEXIL® adalah sediaan dry syrup yang mengandung Cefixime Trihydrate, yaitu antibiotik golongan sefalosporin generasi ketiga yang digunakan untuk mengobati infeksi bakteri pada saluran pernapasan, saluran kemih, telinga, dan infeksi lainnya.

Komposisi:
Setiap 5 ml larutan sirup CEXIL® mengandung 100 mg Cefixime Trihydrate.

Dosis dan Cara Pemakaian:
Anak-anak (6 bulan - 12 tahun): 4 mg/kg berat badan per hari
Dewasa dan anak di atas 12 tahun: 200 mg dua kali sehari atau 400 mg sekali sehari.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Penggunaan pada wanita hamil dan menyusui hanya boleh dilakukan jika benar-benar diperlukan dan atas anjuran dokter.

Kemasan:
Botol dry syrup 30 g (setelah dilarutkan menghasilkan 60 ml larutan).

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya. Setelah larutan disiapkan, simpan dalam lemari pendingin dan gunakan dalam waktu 14 hari.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 34, name: 'PYRANOL', type: 'Dry Sirup', imageUrl: './product/pyranol.jpeg', price: 'Rp 30.000', description: `Deskripsi Produk:
PYRANOL® adalah sediaan sirup yang mengandung Paracetamol, yaitu obat analgesik dan antipiretik yang digunakan untuk meredakan nyeri ringan hingga sedang dan menurunkan demam. Obat ini cocok digunakan pada anak-anak untuk mengatasi gejala demam dan nyeri, seperti sakit kepala, sakit gigi, atau nyeri otot.

Komposisi:
Setiap 5 ml sirup PYRANOL® mengandung 120 mg Paracetamol.

Dosis dan Cara Pemakaian:
Anak-anak (2-6 tahun): 5 ml, 3 kali sehari
Anak-anak (6-12 tahun): 10 ml, 3 kali sehari
Dewasa dan anak di atas 12 tahun: 10 ml, 3-4 kali sehari
Dosis maksimal adalah 4 kali per hari. Dosis harus disesuaikan dengan usia, berat badan, dan kondisi klinis pasien.

Golongan: Obat Bebas

Perhatian dan Peringatan:
Tidak dianjurkan untuk digunakan pada pasien dengan gangguan hati atau ginjal yang berat.
Jangan melebihi dosis yang dianjurkan

Kemasan:
Botol sirup 60 ml.

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 35, name: 'SALBRON', type: 'Dry Sirup', imageUrl: './product/salbron.jpeg', price: 'Rp 68.000', description: `Deskripsi Produk: 
SALBRON® adalah sediaan sirup yang mengandung Salbutamol, yang merupakan bronkodilator kerja cepat. Obat ini digunakan untuk melegakan saluran pernapasan yang menyempit akibat asma bronkial, bronkitis kronis, emfisema, dan kondisi paru-paru lainnya yang menyebabkan kesulitan bernapas.

Komposisi: 
Setiap 5 ml SALBRON® sirup mengandung 2 mg Salbutamol.

Dosis dan Cara Pemakaian:
Anak-anak (2-6 tahun): 1-2,5 ml, 3-4 kali sehari
Anak-anak (6-12 tahun): 2,5 ml, 3-4 kali sehari
Dewasa dan anak di atas 12 tahun: 5 ml, 3-4 kali sehari

Golongan: Obat Keras (memerlukan resep dokter).

Perhatian dan Peringatan:
Tidak dianjurkan untuk digunakan bersamaan dengan beta-blocker non-selektif.
Gunakan dengan hati-hati pada pasien dengan penyakit jantung, hipertensi, atau hipertiroidisme.
Jika terjadi efek samping seperti tremor, takikardia, atau reaksi hipersensitivitas, segera konsultasikan dengan dokter.

Kemasan: Botol sirup 60 ml .

Penyimpanan: Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 36, name: 'Amoxidryl', type: 'Dry Sirup', imageUrl: './product/amoxidryl.jpeg', price: 'Rp 55.000', description: 'Amoxidryl® adalah sediaan sirup kering yang mengandung Amoxicillin, antibiotik spektrum luas dari golongan penisilin. Setelah dilarutkan, sirup ini digunakan untuk mengobati infeksi bakteri yang umum pada anak-anak, seperti infeksi saluran pernapasan, otitis media, dan infeksi kulit.' },
  { id: 37, name: 'OTRAVEX', type: 'Ear Drops', imageUrl: './product/Otravex.jpeg', price: 'Rp 62.000', description: `Deskripsi Produk:
OTRAVEX® adalah tetes telinga steril yang mengandung Ciprofloxacin, antibiotik dari golongan fluoroquinolone yang bekerja dengan cara menghambat pertumbuhan bakteri penyebab infeksi telinga. OTRAVEX® digunakan untuk mengobati otitis eksternalis (infeksi telinga luar) dan otitis media (infeksi telinga tengah), terutama yang disebabkan oleh bakteri seperti Pseudomonas aeruginosa dan Staphylococcus aureus.

Komposisi:
Setiap 1 ml OTRAVEX® mengandung:
• Ciprofloxacin 3 mg
• Benzalkonium chloride 0.01% sebagai pengawet
• Vehicle q.s. ad 1 ml

Dosis dan Cara Pemakaian:
• Dewasa dan Anak-anak (≥1 tahun):
  ◦ Teteskan 3–4 tetes ke dalam telinga yang terinfeksi, 2 kali sehari (pagi dan malam).
• Anak-anak (<1 tahun):
  ◦ Penggunaan harus berdasarkan petunjuk dan pengawasan dokter.

Golongan:
Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
• Jangan digunakan pada pasien dengan riwayat alergi terhadap Ciprofloxacin atau antibiotik fluoroquinolone lainnya.
• Gunakan dengan hati-hati pada pasien dengan perforasi membran timpani atau setelah pembedahan telinga.
• Hindari kontak langsung dengan mata.
• Gunakan selama periode yang direkomendasikan untuk mencegah resistensi bakteri.

Kemasan:
Botol tetes telinga steril 5 ml.

Penyimpanan:
Simpan pada suhu 15–25°C, terlindung dari cahaya dan kelembapan. Setelah dibuka, gunakan dalam waktu 30 hari.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 38, name: 'OTRINOL', type: 'Ear Drops', imageUrl: './product/Otrinol1.jpeg', price: 'Rp 70.000', description: `Deskripsi Produk:
OTRINOL® adalah tetes telinga yang mengandung Neomycin Sulfate 0.5%, antibiotik golongan aminoglikosida yang bekerja dengan menghambat sintesis protein bakteri. OTRINOL® digunakan untuk mengobati infeksi telinga luar (otitis eksternalis) dan infeksi telinga tengah akibat bakteri yang sensitif terhadap Neomycin. Obat ini membantu meredakan gejala seperti nyeri, gatal, dan keluarnya cairan dari telinga akibat infeksi.

Komposisi:
Setiap 1 ml OTRINOL® mengandung 5 mg Neomycin Sulfate (0.5%).

Dosis dan Cara Pemakaian:
• Dewasa dan Anak-anak (di atas 1 tahun):
  ◦ Teteskan 3–4 tetes ke dalam telinga yang terinfeksi, 2–3 kali sehari.
• Anak-anak (di bawah 1 tahun):
  ◦ Penggunaan pada anak di bawah usia 1 tahun harus berdasarkan anjuran dokter.

Golongan:
Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
• Jangan digunakan pada pasien dengan riwayat alergi terhadap Neomycin atau antibiotik golongan aminoglikosida lainnya.
• Gunakan dengan hati-hati pada pasien dengan perforasi membran timpani.
• Penggunaan jangka panjang dapat menyebabkan resistensi bakteri atau infeksi sekunder akibat jamur.

Kemasan:
Botol tetes telinga steril 5 ml.

Penyimpanan:
Simpan pada suhu 15–25°C, terlindung dari cahaya langsung. Setelah dibuka, gunakan dalam waktu 30 hari.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 39, name: 'DULCYN', type: 'Suppositoria', imageUrl: './product/dulcyn.jpeg', price: 'Rp 25.000', description: `Deskripsi Produk:
DULCYN® adalah suppositoria yang mengandung Sodium Picosulfate 10 mg, obat pencahar (laksatif) yang bekerja dengan merangsang pergerakan usus besar dan meningkatkan pengeluaran feses. DULCYN® digunakan untuk mengatasi konstipasi (sembelit) jangka pendek dan dapat digunakan sebagai persiapan sebelum prosedur medis yang memerlukan pengosongan usus.

Komposisi:
Setiap suppositoria DULCYN® mengandung 10 mg Sodium Picosulfate.

Dosis dan Cara Pemakaian:
• Dewasa dan anak-anak di atas 12 tahun:
  ◦ 1 suppositoria (10 mg) dimasukkan ke dalam rektum bila diperlukan.
• Anak-anak (6–12 tahun):
  ◦ ½ suppositoria (5 mg), sesuai anjuran dokter.

Golongan:
Obat Bebas Terbatas

Perhatian dan Peringatan:
• Gunakan dengan hati-hati pada pasien dengan gangguan elektrolit, peradangan usus, atau nyeri perut yang belum diketahui penyebabnya.
• Hanya untuk penggunaan rektal, tidak boleh ditelan.
• Penggunaan jangka panjang dapat menyebabkan ketergantungan atau gangguan keseimbangan elektrolit.
• Jangan gunakan jika kemasan rusak atau produk tampak berubah warna.

Kemasan:
1 Blister × 5 Suppositoria.

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 40, name: 'FEPROL', type: 'Suppositoria', imageUrl: './product/feprol.jpeg', price: 'Rp 30.000', description: `Deskripsi Produk:
FEPROL® adalah suppositoria yang mengandung Ibuprofen 125 mg, obat antiinflamasi nonsteroid (AINS) yang digunakan untuk menurunkan demam dan meredakan nyeri ringan hingga sedang pada anak-anak, seperti nyeri gigi, sakit kepala, atau nyeri akibat tumbuh gigi. Bentuk suppositoria memudahkan pemberian pada anak-anak yang sulit menelan obat dalam bentuk oral.

Komposisi:
Setiap suppositoria FEPROL® mengandung 125 mg Ibuprofen.

Dosis dan Cara Pemakaian:
• Anak-anak (1–5 tahun):
  ◦ 1 suppositoria (125 mg) setiap 6–8 jam jika diperlukan.
  ◦ Jangan melebihi 4 suppositoria dalam 24 jam.

Golongan:
Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
• Jangan digunakan pada pasien dengan riwayat alergi terhadap Ibuprofen atau obat antiinflamasi nonsteroid lainnya.
• Gunakan dengan hati-hati pada pasien dengan gangguan hati, ginjal, atau saluran cerna.
• Jangan gunakan suppositoria jika kemasan rusak atau produk tampak berubah warna atau bentuk.

Kemasan:
2 Blister × 6 Suppositoria.

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 41, name: 'CEFORIN', type: 'Kaplet', imageUrl: '/product/ceforin.jpeg', price: 'Rp 220.000', description: `Deskripsi Produk:
CEFORIN® adalah film-coated caplet yang mengandung Cefpodoxime Proxetil 200 mg, antibiotik golongan sefalosporin generasi ketiga yang aktif terhadap berbagai bakteri Gram positif maupun Gram negatif. Obat ini digunakan untuk mengobati berbagai infeksi bakteri seperti infeksi saluran pernapasan atas dan bawah, infeksi saluran kemih, infeksi kulit dan jaringan lunak, serta infeksi telinga (otitis media). Cefpodoxime bekerja dengan cara menghambat sintesis dinding sel bakteri, sehingga menyebabkan lisis dan kematian sel bakteri.

Komposisi:
Setiap film-coated caplet CEFORIN® mengandung Cefpodoxime Proxetil setara dengan 200 mg Cefpodoxime.

Dosis dan Cara Pemakaian:
Dosis untuk dewasa dan anak-anak di atas 12 tahun adalah 1 caplet (200 mg) setiap 12 jam, atau sesuai petunjuk dokter berdasarkan tingkat keparahan infeksi dan kondisi pasien. Caplet sebaiknya diminum setelah makan untuk meningkatkan absorpsi obat di saluran cerna.

Golongan:
CEFORIN® termasuk dalam golongan obat keras yang hanya dapat digunakan dengan resep dokter.

Perhatian dan Peringatan:
Penggunaan harus hati-hati pada pasien dengan riwayat alergi terhadap antibiotik sefalosporin atau penisilin, serta pada pasien dengan gangguan fungsi ginjal. Penggunaan antibiotik yang tidak sesuai dosis atau durasi dapat menimbulkan resistensi bakteri dan menurunkan efektivitas pengobatan.

Kemasan:
CEFORIN® dikemas dalam 1 strip berisi 10 film-coated caplet.

Penyimpanan:
Simpan obat pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 42, name: 'PYRAVIN', type: 'Kaplet', imageUrl: './product/Pyravin.jpeg', price: 'Rp 15.000', description: `Deskripsi Produk:
PYRAVIN® adalah sediaan kaplet yang mengandung Paracetamol 500 mg, berfungsi sebagai analgesik (pereda nyeri) dan antipiretik (penurun demam). Obat ini efektif untuk meredakan sakit kepala, nyeri otot, sakit gigi, demam, serta keluhan akibat flu dan pilek. Dengan formulasi yang aman, PYRAVIN® dapat digunakan oleh dewasa maupun anak-anak di atas 6 tahun.

Komposisi:
Setiap kaplet PYRAVIN® mengandung:
Paracetamol 500 mg
Eksipien: Povidone, pati jagung, magnesium stearat, talk, dan selulosa mikrokristalin.

Dosis dan Cara Pemakaian:
Dewasa dan anak-anak di atas 12 tahun: 1 kaplet (500 mg) setiap 4–6 jam bila diperlukan.
Anak-anak (6–12 tahun): ½ kaplet (250 mg) setiap 4–6 jam bila diperlukan.
Jangan melebihi 8 kaplet (4.000 mg) per hari.

Golongan: Obat Bebas

Perhatian dan Peringatan:
Gunakan dengan hati-hati pada pasien dengan gangguan fungsi hati atau ginjal. Hindari penggunaan bersamaan dengan obat lain yang juga mengandung Paracetamol. Efek samping yang jarang terjadi meliputi reaksi alergi ringan seperti ruam kulit atau gatal.

Kemasan: 10 Blister x 10 Kaplet.

Penyimpanan: Simpan pada suhu di bawah 30°C, di tempat kering dan terlindung dari cahaya langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 43, name: 'GLUMETA', type: 'Kaplet Blister', imageUrl: './product/Glumeta.jpeg', price: 'Rp 190.000', description: `Deskripsi Produk:
GLUMETA® adalah film-coated caplet yang mengandung kombinasi Glimepiride dan Metformin HCl, dua agen antidiabetes oral yang bekerja secara sinergis untuk membantu mengontrol kadar glukosa darah pada pasien diabetes melitus tipe 2. Kombinasi ini efektif digunakan pada pasien yang tidak dapat dikontrol hanya dengan diet, olahraga, atau monoterapi.

Komposisi:
Setiap film-coated caplet GLUMETA® mengandung:
Glimepiride 2 mg
Metformin Hydrochloride 500 mg
Eksipien: mikrokristalin selulosa, povidone, magnesium stearat, kroskarmelosa natrium, dan pelapis film (HPMC, titanium dioksida, PEG 400).

Dosis dan Cara Pemakaian:
Dewasa: 1 caplet sekali atau dua kali sehari, dikonsumsi bersama makanan untuk mengurangi risiko gangguan saluran pencernaan.
Dosis dapat disesuaikan oleh dokter berdasarkan kadar glukosa darah pasien.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Tidak dianjurkan untuk pasien dengan gangguan fungsi ginjal atau hati yang berat.
Hindari konsumsi alkohol karena dapat meningkatkan risiko asidosis laktat.
Penggunaan pada wanita hamil dan menyusui harus dilakukan dengan pengawasan dokter.
Pantau kadar glukosa darah secara berkala untuk menghindari hipoglikemia.

Kemasan: 3 Blister x 10 Film-Coated Caplets

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 44, name: 'CARDISIM', type: 'Kaplet', imageUrl: './product/cardisim.jpeg', price: 'Rp 175.000', description: `Deskripsi Produk:
CARDISIM® adalah sediaan film-coated caplet yang mengandung Simvastatin 10 mg, obat dari golongan statin yang berfungsi menurunkan kadar kolesterol total, LDL (kolesterol jahat), dan trigliserida, serta meningkatkan kadar HDL (kolesterol baik) dalam darah. Penggunaan rutin CARDISIM® membantu mengurangi risiko penyakit jantung koroner, stroke, dan gangguan kardiovaskular akibat kadar lipid yang tinggi.

Komposisi:
Setiap film-coated caplet CARDISIM® mengandung:
Simvastatin 10 mg
Eksipien: Laktosa monohidrat, mikrokristalin selulosa, magnesium stearat, povidone, dan titanium dioksida sebagai pelapis film.

Dosis dan Cara Pemakaian:
Dewasa: 1 caplet (10 mg) sekali sehari pada malam hari.
Dosis dapat disesuaikan berdasarkan kadar kolesterol dan respons pasien terhadap terapi.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Gunakan dengan hati-hati pada pasien dengan gangguan fungsi hati. Tidak dianjurkan pada wanita hamil dan menyusui. Hindari konsumsi alkohol secara berlebihan. Pemeriksaan kadar enzim hati secara berkala disarankan selama terapi.

Kemasan: 10 Blister x 10 Film Coated Caplets.

Penyimpanan: Simpan di tempat kering dan terlindung dari cahaya pada suhu di bawah 30°C.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 45, name: 'FOLIRON', type: 'Tablet kunyah', imageUrl: './product/foliron.jpeg', price: 'Rp 40.000', description: `Deskripsi Produk:
FOLIRON® adalah tablet kunyah yang mengandung kombinasi Iron Polymaltose Complex dan Asam Folat (Folic Acid). Suplemen ini berfungsi untuk mencegah dan mengatasi anemia defisiensi besi, terutama pada wanita hamil, ibu menyusui, remaja, serta pasien dengan kebutuhan zat besi yang meningkat. Kandungan asam folat dalam FOLIRON® membantu pembentukan sel darah merah yang sehat dan mendukung perkembangan janin selama kehamilan.

Komposisi:
Setiap tablet kunyah FOLIRON® mengandung:
Iron Polymaltose Complex
Folic Acid (Asam Folat) 0,5 mg

Dosis dan Cara Pemakaian:
Dewasa dan remaja (di atas 12 tahun): 1–2 tablet kunyah per hari, atau sesuai anjuran dokter.

Golongan: Obat Bebas

Perhatian dan Peringatan:
Simpan jauh dari jangkauan anak-anak. Efek samping ringan yang mungkin terjadi meliputi mual, konstipasi, atau gangguan pencernaan ringan. Jika gejala menetap, segera konsultasikan dengan tenaga medis.

Kemasan: 3 Strip x 10 Tablet Kunyah.

Penyimpanan: Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 46, name: 'CITRAVIT', type: 'Suplemen Effervescent', imageUrl: './product/citravit.jpeg', price: 'Rp 50.000', description: `Deskripsi Produk:
CITRAVIT® adalah tablet effervescent yang mengandung Vitamin C 1000 mg dan Zinc 10 mg, diformulasikan khusus untuk membantu meningkatkan daya tahan tubuh, mempercepat proses penyembuhan, serta melindungi sel-sel tubuh dari kerusakan akibat radikal bebas. Kombinasi Vitamin C dan Zinc membantu menjaga kesehatan kulit, memperkuat sistem imun, dan meningkatkan penyerapan zat besi.

Komposisi:
Setiap tablet effervescent CITRAVIT® mengandung:
Vitamin C (Asam Askorbat) 1000 mg
Zinc (Zinc Sulfate Monohydrate) setara dengan Zinc 10 mg
Eksipien: Asam sitrat, natrium bikarbonat, sorbitol, perisa jeruk alami, dan pemanis alami.

Dosis dan Cara Pemakaian:
Dewasa dan anak-anak di atas 12 tahun: 1 tablet effervescent per hari, dilarutkan dalam segelas air (200 mL).
Sebaiknya dikonsumsi setelah makan.

Golongan: Suplemen Kesehatan

Perhatian dan Peringatan:
Jangan melebihi dosis harian yang dianjurkan.
Hati-hati pada pasien dengan gangguan ginjal atau riwayat batu ginjal.
Konsumsi berlebihan dapat menyebabkan diare atau gangguan lambung ringan.
Simpan tablet dalam wadah tertutup rapat untuk menghindari paparan kelembapan.

Kemasan:
Tabung berisi 10 Tablet Effervescent rasa jeruk segar.

Penyimpanan:
Simpan di tempat kering dan sejuk, dengan tutup rapat, serta terlindung dari sinar matahari langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 47, name: 'LYSERIN', type: 'Effervescent Tablet', imageUrl: './product/lyserin.jpeg', price: 'Rp 38.000', description: `Deskripsi Produk:
LYSERIN® adalah tablet effervescent yang mengandung Acetylsalicylic Acid 300 mg, diformulasikan untuk membantu meredakan nyeri ringan hingga sedang seperti sakit kepala, nyeri otot, nyeri haid, sakit gigi, dan nyeri akibat peradangan. Dengan bentuk effervescent yang mudah larut dalam air, LYSERIN® memberikan efek cepat, rasa segar, serta kenyamanan saat dikonsumsi.

Komposisi:
Setiap tablet effervescent LYSERIN® mengandung:
Acetylsalicylic Acid 300 mg
Eksipien: Asam sitrat, natrium bikarbonat, sorbitol, perisa jeruk alami, dan pemanis non-gula.

Dosis dan Cara Pemakaian:
Dewasa: 1–2 tablet effervescent (300–600 mg) setiap 4–6 jam, jika diperlukan.
Larutkan satu tablet dalam segelas air (200 mL) sebelum diminum.
Tidak dianjurkan mengonsumsi lebih dari 8 tablet dalam 24 jam tanpa anjuran dokter.

Golongan: Obat Bebas Terbatas

Perhatian dan Peringatan:
Tidak dianjurkan untuk pasien dengan riwayat alergi terhadap aspirin atau NSAID.
Hindari penggunaan pada pasien dengan gangguan perdarahan, tukak lambung, atau asma.
Tidak digunakan untuk anak-anak dan remaja dengan infeksi virus, karena risiko sindrom Reye.
Hati-hati pada pasien dengan gangguan ginjal atau hati.

Kemasan:
Tabung berisi 10 Tablet Effervescent rasa jeruk segar.

Penyimpanan:
Simpan di tempat kering dan sejuk, dengan tutup rapat, serta terlindung dari sinar matahari langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 48, name: 'ImunoCee+', type: 'Blister', imageUrl: './product/ImunoCee.jpeg', price: 'Rp 60.000', description: `Deskripsi Produk:
ImunoCee+® adalah tablet kunyah dengan kombinasi Vitamin C, Vitamin E, dan Zinc yang berperan sebagai antioksidan untuk membantu memelihara daya tahan tubuh serta melindungi sel dari kerusakan akibat radikal bebas.

Komposisi:
Setiap tablet kunyah ImunoCee+® mengandung:
• Vitamin C 500 mg
• Vitamin E 10 mg
• Zinc gluconate (setara Zn 7,5 mg)

Dosis dan Cara Pemakaian:
• Dewasa: 1 tablet kunyah per hari, dapat dikunyah atau dibiarkan larut di mulut.
• Anak-anak di atas 12 tahun: 1 tablet kunyah per hari.

Golongan: Suplemen Kesehatan

Perhatian dan Peringatan:
• Hentikan penggunaan jika timbul reaksi alergi.
• Tidak dianjurkan mengonsumsi melebihi dosis harian yang dianjurkan.
• Konsultasikan dengan dokter jika digunakan bersamaan dengan obat lain.

Kemasan:
10 Blisters x 10 Tablet Kunyah

Penyimpanan:
Simpan di tempat kering, suhu di bawah 30°C, terlindung dari cahaya dan kelembapan.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 49, name: 'GastroMint Chew', type: 'Blister', imageUrl: './product/gastromintchew.jpeg', price: 'Rp 28.000', description: `Deskripsi Produk:
GastroMint Chew® adalah tablet kunyah herbal yang mengandung ekstrak jahe, peppermint, dan inulin. Kombinasi ini membantu mengurangi rasa kembung, mual ringan, serta mendukung kesehatan pencernaan.

Komposisi:
Setiap tablet kunyah GastroMint Chew® mengandung:
Ekstrak Jahe 150 mg
Ekstrak Peppermint 50 mg
Inulin 400 mg

Dosis dan Cara Pemakaian:
Dewasa: 1–2 tablet kunyah setelah makan, 2–3 kali sehari.
Anak-anak di atas 12 tahun: 1 tablet kunyah setelah makan, 1–2 kali sehari.

Golongan: Suplemen Herbal

Perhatian dan Peringatan:
Tidak dianjurkan pada penderita tukak lambung aktif.
Konsultasikan dengan dokter jika sedang hamil atau menyusui.
Jika gejala pencernaan tidak membaik dalam 3 hari, hentikan penggunaan dan hubungi tenaga kesehatan.

Kemasan:
10 Blisters x 10 Tablet Kunyah

Penyimpanan:
Simpan di tempat sejuk, kering, suhu di bawah 30°C, terlindung dari cahaya.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 50, name: 'RAVIL', type: 'Blister', imageUrl: './product/vasoten.jpeg', price: 'Rp 230.000', description: `Deskripsi Produk:
RAVIL® adalah sediaan tablet yang mengandung Valsartan, yaitu obat yang digunakan untuk mengobati hipertensi (tekanan darah tinggi) dan gagal jantung.

Komposisi:
Setiap tablet RAVIL® mengandung 80 mg Valsartan.

Dosis dan Cara Pemakaian:
Dosis harus disesuaikan dengan kondisi klinis pasien dan anjuran dokter.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Hati-hati pada pasien dengan gangguan fungsi hati atau ginjal.
Penggunaan pada wanita hamil dan menyusui harus dilakukan dengan hati-hati, dan hanya jika dianggap sangat perlu oleh dokter.

Kemasan:
1 Strip x 10 Tablet

Penyimpanan:
Simpan pada suhu di bawah 30°C, di tempat yang kering dan terlindung dari cahaya.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 51, name: 'ASPYLIN', type: 'Tablet', imageUrl: './product/aspylin.jpeg', price: 'Rp 20.000', description: `Deskripsi Produk:
ASPYLIN® adalah sediaan tablet yang mengandung Acetylsalicylic Acid 500 mg, digunakan untuk meredakan nyeri ringan hingga sedang seperti sakit kepala, nyeri otot, nyeri haid, serta menurunkan demam. ASPYLIN® bekerja dengan cara menghambat enzim siklooksigenase (COX), yang berperan dalam pembentukan prostaglandin — senyawa penyebab nyeri, peradangan, dan demam. Selain itu, ASPYLIN® juga bermanfaat dalam mencegah penggumpalan darah (antiplatelet) bila digunakan dalam dosis rendah.

Komposisi:
Setiap tablet mengandung Acetylsalicylic Acid 500 mg dengan bahan tambahan seperti maize starch, microcrystalline cellulose, povidone K-30, talc, dan magnesium stearate sebagai pengikat dan pelicin untuk menjaga kestabilan sediaan.

Dosis dan Cara Pemakaian:
Dewasa: 1 tablet (500 mg) setiap 4–6 jam sesuai kebutuhan. Maksimal 8 tablet (4 gram) per hari. Tidak dianjurkan untuk anak-anak di bawah usia 12 tahun tanpa petunjuk dokter.

Golongan: Obat Bebas Terbatas

Perhatian dan Peringatan:
Tidak dianjurkan untuk pasien dengan alergi terhadap aspirin atau NSAID, tukak lambung aktif, atau gangguan pendarahan. Gunakan dengan hati-hati pada penderita asma, penyakit hati, ginjal, atau jantung. Hindari pemakaian pada wanita hamil trimester ketiga.

Kemasan: Blister berisi 10 tablet (1x10 tablet).

Penyimpanan: Simpan pada suhu di bawah 30°C, di tempat kering dan terlindung dari cahaya.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 52, name: 'GLUVERA', type: 'Insulin', imageUrl: './product/gluvera.jpeg', price: 'Rp 280.000', description: `Deskripsi Produk:
GLUVERA® adalah larutan injeksi steril yang mengandung Insulin Aspart 100 IU/mL, suatu insulin kerja cepat (rapid-acting insulin analogue) yang digunakan untuk mengontrol kadar glukosa darah pada pasien dengan diabetes melitus tipe 1 maupun tipe 2.
Formulasi GLUVERA® dirancang untuk memberikan awal kerja cepat, puncak efek optimal, dan durasi kerja singkat, sehingga dapat meniru respons fisiologis insulin alami tubuh setelah makan.

Komposisi:
Setiap mL GLUVERA® mengandung:
Insulin Aspart (rDNA origin) … 100 IU
Glycerol … 16 mg
Metacresol … 1.72 mg
Phenol … 1.5 mg
Sodium Chloride … 0.58 mg
Zinc Chloride … 0.025 mg
Disodium Hydrogen Phosphate Dihydrate … 3.78 mg
Air untuk injeksi … ad 1 mL
(pH disesuaikan dengan natrium hidroksida atau asam klorida)

Dosis dan Cara Pemakaian:
Dosis bersifat individual, tergantung pada kadar glukosa darah, asupan makanan, aktivitas fisik, serta respons terhadap terapi insulin.
Dewasa dan anak-anak: disuntikkan subkutan 5–10 menit sebelum makan.
Dapat dikombinasikan dengan insulin basal kerja panjang sesuai anjuran dokter.
Jangan digunakan secara intravena.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Jangan gunakan jika larutan tampak keruh, berwarna, atau mengandung partikel — insulin aspart harus jernih dan tidak berwarna.
Rotasikan area penyuntikan (perut, paha, lengan atas) untuk mencegah lipodistrofi atau penebalan kulit.
Hindari pencampuran dengan insulin lain kecuali atas petunjuk tenaga medis.
Jangan berbagi pena atau jarum dengan orang lain.
Gunakan dengan hati-hati pada pasien dengan gangguan ginjal, hati, atau hipoglikemia berulang.

Kemasan:
Pena insulin berisi 3 mL larutan (100 IU/mL) dalam kemasan blister steril.

Penyimpanan:
Simpan pada suhu 2–8°C (di lemari pendingin), jangan dibekukan.
Setelah dibuka, dapat disimpan pada suhu di bawah 25°C selama maksimal 28 hari.
Lindungi dari panas berlebih dan sinar matahari langsung.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 53, name: 'INSULYNEX', type: 'Insulin', imageUrl: './product/insulynex.jpeg', price: 'Rp 295.000', description: `Deskripsi Produk:
INSULYNEX® adalah larutan injeksi steril yang mengandung insulin aspart 100 IU/mL, yaitu insulin kerja cepat (rapid-acting insulin) yang digunakan untuk mengontrol kadar glukosa darah pada pasien dengan diabetes melitus tipe 1 maupun tipe 2. Insulin ini bekerja cepat menurunkan kadar glukosa darah setelah penyuntikan dan biasanya digunakan bersama insulin kerja menengah atau panjang untuk mencapai kontrol glukosa yang optimal.

Komposisi:
Setiap mililiter INSULYNEX® mengandung insulin aspart 100 IU dengan eksipien berupa glycerol, phenol, metacresol, sodium chloride, disodium phosphate dihydrate, zinc chloride, dan air untuk injeksi.

Dosis dan Cara Pemakaian:
Dosis pemberian disesuaikan dengan kebutuhan individu berdasarkan kadar glukosa darah, pola makan, serta aktivitas fisik pasien. Pemberian dilakukan secara subkutan di daerah perut, paha, atau lengan atas, umumnya 5–10 menit sebelum makan.

Golongan:
INSULYNEX® termasuk dalam golongan obat keras yang memerlukan resep dokter.

Perhatian dan Peringatan:
Penggunaan harus hati-hati pada pasien dengan gangguan fungsi hati atau ginjal karena dapat meningkatkan risiko hipoglikemia. Gejala hipoglikemia seperti berkeringat, pusing, lemas, atau jantung berdebar perlu diperhatikan. Larutan tidak boleh digunakan apabila tampak keruh atau mengandung partikel, serta jangan disimpan dalam kondisi beku.

Kemasan:
Produk ini dikemas dalam pena insulin berisi larutan 3 mL (300 IU) dengan konsentrasi 100 IU/mL.

Penyimpanan:
Penyimpanan dilakukan pada suhu 2–8°C di dalam lemari pendingin dan tidak boleh dibekukan. Setelah dibuka, INSULYNEX® dapat disimpan pada suhu kamar di bawah 25°C selama maksimal 28 hari.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 54, name: 'PHELNA', type: 'Salep Mata', imageUrl: './product/phelnasalep.jpeg', price: 'Rp 45.000', description: `Deskripsi Produk:
PHELNA® Chloramphenicol Sterile Eye Ointment adalah salep mata yang mengandung chloramphenicol. Obat ini digunakan untuk mengobati infeksi mata yang disebabkan oleh bakteri, termasuk konjungtivitis (radang selaput mata), blefaritis (radang kelopak mata), dan infeksi mata lainnya.

Komposisi:
Setiap gram salep mengandung Chloramphenicol

Dosis dan Cara Pemakaian:
Oleskan salep pada kantung mata bawah 1-2 kali sehari

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Hati-hati pada pasien dengan riwayat penyakit darah (seperti gangguan pembekuan darah) atau gangguan fungsi hati.
Jangan digunakan pada luka terbuka pada mata atau jika ada riwayat gangguan penglihatan.

Kemasan:
Tube 3,5 g.

Penyimpanan:
Simpan pada suhu kamar (15-25°C), terlindung dari cahaya dan kelembapan. Jangan gunakan setelah tanggal kedaluwarsa yang tertera pada kemasan.` },
  { id: 55, name: 'FATAN', type: 'Salep Mata', imageUrl: './product/Gentasol01salep.jpeg', price: 'Rp 50.000', description: `Deskripsi Produk:
FATAN® Gentamicin Sulfate 0,1% Ointment adalah salep antibiotik topikal yang mengandung gentamicin sulfate, yaitu antibiotik aminoglikosida yang efektif dalam mengobati infeksi kulit yang disebabkan oleh bakteri. Salep ini digunakan untuk mengobati infeksi kulit seperti impetigo, infeksi luka, dan infeksi kulit lainnya yang disebabkan oleh bakteri sensitif terhadap gentamicin.

Komposisi:
Setiap gram salep mengandung Gentamicin Sulfate 1 mg (0,1%)

Dosis dan Cara Pemakaian:
Oleskan salep tipis-tipis pada area kulit yang terinfeksi 1-3 kali sehari.

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Jangan digunakan pada luka terbuka atau area kulit yang luas tanpa pengawasan dokter.
Hindari penggunaan pada area sekitar mata atau membran mukosa (seperti mulut atau hidung).

Kemasan:
Tube 15 g.

Penyimpanan:
Simpan pada suhu kamar (15-30°C), terlindung dari cahaya dan kelembapan.` },
  { id: 56, name: 'OPTACYCLIN', type: 'Salep Mata', imageUrl: './product/optacylin.jpeg', price: 'Rp 48.000', description: `Deskripsi Produk:
OPTACYCLIN® Oxytetracycline HCl 1% Sterile Eye Ointment adalah salep mata antibiotik yang mengandung oxytetracycline. Obat ini digunakan untuk mengobati infeksi mata yang disebabkan oleh bakteri, termasuk konjungtivitis (radang selaput mata) dan infeksi mata lainnya.

Komposisi:
Setiap gram salep mengandung Oxytetracycline HCl 10 mg (1%)

Dosis dan Cara Pemakaian:
Oleskan salep pada kantung mata bawah 1-2 kali sehari

Golongan: Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
Hanya untuk penggunaan luar (topikal pada mata).
Hindari penggunaan pada luka terbuka atau jika ada riwayat alergi terhadap oxytetracycline atau bahan lainnya dalam salep.

Kemasan:
Tube 3,5 g.

Penyimpanan:
Simpan pada suhu kamar (15-25°C), terlindung dari cahaya dan kelembapan. Jangan gunakan setelah tanggal kedaluwarsa yang tertera pada kemasan.` },
  { id: 57, name: 'BUFUS', type: 'Cream', imageUrl: './product/skinfussalepcream.jpeg', price: 'Rp 75.000', description: `Deskripsi Produk: 
BUFUS® adalah krim topikal yang mengandung Fusidic Acid 2%, antibiotik yang efektif untuk mengobati infeksi kulit yang disebabkan oleh bakteri, terutama Staphylococcus aureus.

Komposisi: 
Setiap gram krim mengandung 20 mg Fusidic Acid.

Dosis dan Cara Pemakaian:
Oleskan krim BUFUS® pada area kulit yang terinfeksi sebanyak 2-3 kali sehari.

Golongan: Obat Keras (memerlukan resep dokter).

Perhatian dan Peringatan:
Hanya untuk pemakaian luar. Jangan digunakan di area mata.
Hentikan penggunaan dan segera konsultasikan dengan dokter jika terjadi reaksi alergi.
Gunakan dengan hati-hati pada ibu hamil dan menyusui, sesuai petunjuk dokter.

Kemasan: Tube krim 5 gram

Penyimpanan: Simpan di tempat sejuk dan kering, jauhkan dari paparan sinar matahari langsung dan simpan di bawah suhu 25°C.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 58, name: 'KETODERM', type: 'Cream', imageUrl: './product/ketodermsalep2.jpeg', price: 'Rp 65.000', description: `Deskripsi Produk:
KETODERM® Ketoconazole Krim 2% adalah obat antijamur topikal yang digunakan untuk mengobati berbagai infeksi jamur pada kulit. KETODERM® efektif digunakan untuk mengobati infeksi jamur yang terjadi di area kulit yang terkena, seperti pada penderita infeksi dermatofitosis, kandidiasis, dan tinea.

Komposisi:
Setiap 1 g krim mengandung Ketoconazole 20 mg (2%)

Dosis dan Cara Pemakaian:
Oleskan ketoconazole krim tipis-tipis pada area yang terinfeksi 1-2 kali sehari

Golongan: Obat Bebas Terbatas (memerlukan resep dokter)

Perhatian dan Peringatan:
Hanya untuk penggunaan luar (topikal).
Hindari kontak dengan mata, hidung, atau mulut. Jika terjadi kontak, segera bilas dengan air bersih.

Kemasan:
Tube krim 15 g.

Penyimpanan:
Simpan pada suhu kamar (15-30°C), terlindung dari cahaya dan kelembapan.` },
  { id: 59, name: 'ALBUVEX', type: 'Infus Albumin', imageUrl: './product/albuvex.jpeg', price: 'Rp 950.000', description: `Deskripsi Produk:
ALBUVEX® adalah larutan infus steril yang mengandung Human Albumin 20%. Obat ini digunakan untuk menggantikan dan mempertahankan volume plasma pada kondisi medis seperti hipovolemia (penurunan volume darah), luka bakar berat, sindrom nefrotik, dan hipoalbuminemia akibat gangguan hati atau ginjal. Human albumin berperan penting dalam menjaga tekanan onkotik plasma dan mengatur keseimbangan cairan tubuh.

Komposisi:
Setiap 100 ml larutan infus mengandung:
• Human Albumin 20 g (20%)
• Sodium Chloride q.s.
• Air untuk Injeksi ad 100 ml

Dosis dan Cara Pemakaian:
• Dewasa:
  ◦ Untuk penggantian volume plasma pada hipovolemia berat, dosis awal dapat berkisar antara 100–200 ml, disesuaikan dengan kondisi pasien dan kadar albumin plasma.
• Anak-anak:
  ◦ Dosis disesuaikan berdasarkan berat badan (sekitar 1 g/kgBB) dan kondisi medis, dengan pengawasan dokter.

Golongan:
Obat Keras (memerlukan resep dokter)

Perhatian dan Peringatan:
• Pastikan larutan jernih dan bebas partikel sebelum digunakan. Jangan digunakan jika larutan tampak keruh atau mengandung endapan.
• Gunakan dengan hati-hati pada pasien dengan gagal jantung, hipertensi berat, atau edema paru.
• Hentikan pemberian jika muncul reaksi alergi seperti ruam, sesak napas, atau hipotensi.
• Jangan mencampur dengan larutan yang mengandung protein hidrolisat, asam amino, atau alkohol.

Kemasan:
Botol 100 ml, mengandung 20 g Human Albumin (20%).

Penyimpanan:
Simpan pada suhu 2–25°C, terlindung dari cahaya langsung. Jangan dibekukan. Setelah vial dibuka, gunakan dalam waktu 24 jam sesuai petunjuk dokter.

Diproduksi oleh:
PT Candrelia Farma, Palembang – Indonesia` },
  { id: 60, name: 'PLASBUMIN', type: 'Infus Albumin', imageUrl: './product/plasbumin.jpeg', price: 'Rp 880.000', description: 'PLASBUMIN® adalah larutan infus steril Human Albumin 25% yang sangat murni. Larutan hiperonkotik ini digunakan untuk ekspansi volume plasma dan pemeliharaan curah jantung pada kondisi kritis seperti syok hipovolemik, luka bakar luas, dan hipoalbuminemia berat. PLASBUMIN® bekerja dengan menarik cairan dari ruang interstisial ke dalam sirkulasi.' },
  // { id: 61, name: 'NABUL', type: 'Infus Albumin', imageUrl: './product/nabul.jpeg', price: 'Rp 900.000', description: 'NABUL® adalah larutan infus yang mengandung Human Albumin 20%, berfungsi untuk mempertahankan volume darah dan tekanan osmotik, serta mengikat dan mengangkut zat-zat penting dalam darah. NABUL® digunakan untuk mengobati atau mencegah defisiensi albumin, seperti pada kondisi kehilangan darah yang parah, luka bakar, sindrom nefrotik, atau kondisi medis lain yang memerlukan penggantian volume plasma darah.' },
];