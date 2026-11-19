import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // --- PILIHAN GANDA (15 SOAL) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Penjumlahan Bilangan 1-30',
    difficulty: 'Mudah',
    text: 'Ani memetik 14 apel merah dan 13 apel hijau seperti pada gambar di bawah ini. Berapa jumlah seluruh apel yang dipetik Ani?',
    illustration: {
      kind: 'apples_addition',
      caption: 'Gambar: 14 apel merah dan 13 apel hijau',
    },
    options: [
      { id: 'A', text: '25 apel' },
      { id: 'B', text: '26 apel' },
      { id: 'C', text: '27 apel' },
      { id: 'D', text: '28 apel' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah seluruh apel = 14 + 13.\nSatuan: 4 + 3 = 7.\nPuluhan: 10 + 10 = 20.\nJadi, 14 + 13 = 27 apel.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Penjumlahan Bilangan 1-30',
    difficulty: 'Mudah',
    text: 'Di rak perpustakaan kelas 2 terdapat 18 buku cerita. Ibu guru menambahkan lagi 11 buku cerita baru ke rak tersebut. Banyak buku cerita di rak sekarang adalah...',
    options: [
      { id: 'A', text: '27 buku' },
      { id: 'B', text: '28 buku' },
      { id: 'C', text: '29 buku' },
      { id: 'D', text: '30 buku' },
    ],
    correctAnswer: 'C',
    explanation:
      'Buku cerita semula = 18.\nDitambahkan lagi = 11.\nTotal buku cerita sekarang = 18 + 11 = 29 buku.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Pengurangan Bilangan 2-30',
    difficulty: 'Mudah',
    text: 'Budi memiliki 24 balon warna-warni. Sebanyak 9 balon meletus seperti yang ditunjukkan tanda silang (X) pada gambar. Sisa balon Budi yang masih utuh adalah...',
    illustration: {
      kind: 'balloons_subtraction',
      caption: 'Gambar: 24 balon Budi dengan 9 balon meletus',
    },
    options: [
      { id: 'A', text: '13 balon' },
      { id: 'B', text: '14 balon' },
      { id: 'C', text: '15 balon' },
      { id: 'D', text: '16 balon' },
    ],
    correctAnswer: 'C',
    explanation:
      'Balon mula-mula = 24.\nBalon yang meletus = 9.\nSisa balon yang masih utuh = 24 - 9 = 15 balon.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Pengurangan Bilangan 2-30',
    difficulty: 'Mudah',
    text: 'Ibu membuat 28 kue bolu di dapur. Sebanyak 14 kue dibagikan kepada tetangga. Sisa kue bolu Ibu sekarang adalah...',
    options: [
      { id: 'A', text: '12 kue' },
      { id: 'B', text: '13 kue' },
      { id: 'C', text: '14 kue' },
      { id: 'D', text: '15 kue' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kue bolu buatan Ibu = 28.\nDibagikan kepada tetangga = 14.\nSisa kue bolu = 28 - 14 = 14 kue.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Pengurangan Bilangan 2-30',
    difficulty: 'Sedang',
    text: 'Hasil pengurangan dari 30 - 17 adalah...',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '13' },
      { id: 'C', text: '14' },
      { id: 'D', text: '17' },
    ],
    correctAnswer: 'B',
    explanation:
      '30 - 10 = 20.\nKemudian 20 - 7 = 13.\nJadi, hasil dari 30 - 17 adalah 13.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Bangun Datar',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar bangun datar di bawah ini! Nama bangun datar pada gambar tersebut adalah...',
    illustration: {
      kind: 'shape_trapezoid',
      caption: 'Gambar bangun datar',
    },
    options: [
      { id: 'A', text: 'Persegi panjang' },
      { id: 'B', text: 'Jajar genjang' },
      { id: 'C', text: 'Trapesium' },
      { id: 'D', text: 'Belah ketupat' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bangun datar pada gambar memiliki sepasang sisi atas dan bawah yang sejajar dengan panjang berbeda. Bangun datar tersebut bernama trapesium.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Bangun Datar',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar bangun datar berikut! Nama bangun datar yang ditunjukkan pada gambar tersebut adalah...',
    illustration: {
      kind: 'shape_parallelogram',
      caption: 'Gambar bangun datar',
    },
    options: [
      { id: 'A', text: 'Jajar genjang' },
      { id: 'B', text: 'Belah ketupat' },
      { id: 'C', text: 'Layang-layang' },
      { id: 'D', text: 'Persegi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bangun datar pada gambar berbentuk segiempat miring dengan dua pasang sisi yang berhadapan sejajar dan sama panjang. Nama bangun datar tersebut adalah jajar genjang.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Bangun Datar',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar rambu lalu lintas di jalan raya berikut! Benda tersebut memiliki bentuk permukaan yang menyerupai bangun datar...',
    illustration: {
      kind: 'object_triangle_sign',
      caption: 'Gambar rambu lalu lintas',
    },
    options: [
      { id: 'A', text: 'Persegi' },
      { id: 'B', text: 'Segitiga' },
      { id: 'C', text: 'Layang-layang' },
      { id: 'D', text: 'Trapesium' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rambu peringatan lalu lintas pada gambar memiliki 3 sisi lurus. Bentuknya menyerupai bangun datar segitiga.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Bangun Datar',
    difficulty: 'Mudah',
    text: 'Benda-benda di sekitar kita ada yang menyerupai bentuk bangun datar. Benda berikut ini yang bentuk permukaannya menyerupai bangun datar persegi adalah...',
    options: [
      { id: 'A', text: 'Papan tulis kelas yang memanjang' },
      { id: 'B', text: 'Ubin lantai keramik yang keempat sisinya sama panjang' },
      { id: 'C', text: 'Penggaris segitiga' },
      { id: 'D', text: 'Mainan layang-layang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ubin lantai keramik yang keempat sisinya sama panjang menyerupai bentuk bangun datar persegi. Papan tulis menyerupai persegi panjang, penggaris segitiga menyerupai segitiga, dan layang-layang menyerupai bangun layang-layang.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Bangun Ruang',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar bangun ruang di bawah ini! Nama bangun ruang yang ditunjukkan pada gambar tersebut adalah...',
    illustration: {
      kind: 'solid_cone',
      caption: 'Gambar bangun ruang',
    },
    options: [
      { id: 'A', text: 'Kubus' },
      { id: 'B', text: 'Balok' },
      { id: 'C', text: 'Kerucut' },
      { id: 'D', text: 'Bola' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bangun ruang pada gambar memiliki alas berbentuk lingkaran dan ujung atas yang runcing. Nama bangun ruang tersebut adalah kerucut.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Bangun Ruang',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kotak sepatu di bawah ini! Bentuk kotak sepatu tersebut menyerupai bangun ruang...',
    illustration: {
      kind: 'object_shoebox',
      caption: 'Gambar kotak sepatu',
    },
    options: [
      { id: 'A', text: 'Kubus' },
      { id: 'B', text: 'Balok' },
      { id: 'C', text: 'Kerucut' },
      { id: 'D', text: 'Bola' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kotak sepatu memiliki bentuk memanjang dengan sisi persegi panjang yang berhadapan sama besar. Bentuk kotak sepatu menyerupai bangun ruang balok.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Pola Gambar',
    difficulty: 'Mudah',
    text: 'Perhatikan urutan pola gambar berikut! Gambar yang tepat untuk mengisi kotak bertanda tanya (?) adalah...',
    illustration: {
      kind: 'pattern_shapes',
      caption: 'Pola: Lingkaran biru - Segitiga kuning - Persegi hijau',
    },
    options: [
      { id: 'A', text: 'Lingkaran biru' },
      { id: 'B', text: 'Segitiga kuning' },
      { id: 'C', text: 'Persegi hijau' },
      { id: 'D', text: 'Belah ketupat merah' },
    ],
    correctAnswer: 'C',
    explanation:
      'Urutan pola berulang setiap 3 gambar: Lingkaran biru -> Segitiga kuning -> Persegi hijau.\nSetelah Lingkaran biru dan Segitiga kuning, gambar berikutnya adalah Persegi hijau.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Pola Gambar',
    difficulty: 'Sedang',
    text: 'Amati pola jumlah gambar bintang di dalam setiap kotak berikut! Banyak bintang yang tepat untuk mengisi Kotak 4 bertanda tanya (?) adalah...',
    illustration: {
      kind: 'pattern_stars',
      caption: 'Pola jumlah bintang pada Kotak 1, 2, 3, dan 4',
    },
    options: [
      { id: 'A', text: '7 bintang' },
      { id: 'B', text: '8 bintang' },
      { id: 'C', text: '9 bintang' },
      { id: 'D', text: '10 bintang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jumlah bintang bertambah 2 di setiap kotak:\nKotak 1 = 2 bintang\nKotak 2 = 4 bintang\nKotak 3 = 6 bintang\nKotak 4 = 6 + 2 = 8 bintang.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Letak Benda terhadap Benda Lain',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar meja belajar di bawah ini! Letak bola sepak pada gambar tersebut berada di ... meja.',
    illustration: {
      kind: 'position_desk',
      caption: 'Gambar posisi benda di sekitar meja belajar',
    },
    options: [
      { id: 'A', text: 'atas' },
      { id: 'B', text: 'bawah' },
      { id: 'C', text: 'sebelah kiri' },
      { id: 'D', text: 'sebelah kanan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada gambar, lampu, buku, dan pensil berada di atas meja. Tempat sampah berada di sebelah kanan meja, sedangkan bola sepak terletak di bawah meja.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Letak Benda terhadap Benda Lain',
    difficulty: 'Sedang',
    text: 'Perhatikan susunan mainan di atas rak pada gambar berikut! Letak mobil mainan berada di...',
    illustration: {
      kind: 'position_shelf',
      caption: 'Gambar susunan mainan di atas rak',
    },
    options: [
      { id: 'A', text: 'sebelah kiri boneka beruang' },
      { id: 'B', text: 'sebelah kanan robot' },
      { id: 'C', text: 'antara boneka beruang dan robot' },
      { id: 'D', text: 'bawah rak mainan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dari kiri ke kanan di atas rak: Boneka Beruang (kiri), Mobil Mainan (tengah), dan Robot (kanan).\nJadi, mobil mainan terletak di antara boneka beruang dan robot.',
  },

  // --- PILIHAN GANDA KOMPLEKS (3 SOAL) ---
  // Ketentuan: Kemungkinan lebih dari 1 pilihan jawaban benar, setiap soal memiliki 3 pilihan jawaban
  {
    id: 16,
    type: 'pgk',
    topic: 'Penjumlahan & Pengurangan 1-30',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat matematika penjumlahan dan pengurangan di bawah ini! Pilihlah SEMUA pilihan yang hasilnya sama dengan 20! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: '12 + 8' },
      { id: 'B', text: '29 - 9' },
      { id: 'C', text: '15 + 7' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Periksa hasil tiap pilihan:\n- A: 12 + 8 = 20 (Benar)\n- B: 29 - 9 = 20 (Benar)\n- C: 15 + 7 = 22 (Salah, bukan 20)\nJadi jawaban yang benar adalah A dan B.',
  },
  {
    id: 17,
    type: 'pgk',
    topic: 'Bangun Datar',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar benda-benda di sekitar kita berikut! Pilihlah SEMUA pernyataan yang BENAR mengenai bentuk bangun datar benda tersebut!',
    illustration: {
      kind: 'objects_flat_shapes',
      caption: 'Gambar papan tulis, ketupat, dan layang-layang',
    },
    options: [
      { id: 'A', text: 'Papan tulis kelas berbentuk menyerupai bangun datar persegi panjang' },
      { id: 'B', text: 'Ketupat lebaran berbentuk menyerupai bangun datar belah ketupat' },
      { id: 'C', text: 'Mainan layang-layang berbentuk menyerupai bangun datar segitiga' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '1. Papan tulis menyerupai persegi panjang (Benar - A).\n2. Ketupat lebaran menyerupai belah ketupat (Benar - B).\n3. Mainan layang-layang menyerupai bangun datar layang-layang, bukan segitiga (C Salah).\nJadi jawaban yang benar adalah A dan B.',
  },
  {
    id: 18,
    type: 'pgk',
    topic: 'Bangun Ruang',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar benda-benda berbentuk bangun ruang di bawah ini! Pilihlah SEMUA pasangan benda dan nama bangun ruang yang BENAR!',
    illustration: {
      kind: 'objects_solid_shapes',
      caption: 'Gambar dadu, topi ulang tahun, dan bola kasti',
    },
    options: [
      { id: 'A', text: 'Dadu permainan menyerupai bangun ruang kubus' },
      { id: 'B', text: 'Topi ulang tahun menyerupai bangun ruang kerucut' },
      { id: 'C', text: 'Bola kasti menyerupai bangun ruang balok' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '1. Dadu berbentuk kotak sama sisi menyerupai kubus (Benar - A).\n2. Topi ulang tahun beralas lingkaran dan berujung runcing menyerupai kerucut (Benar - B).\n3. Bola kasti menyerupai bangun ruang bola, bukan balok (C Salah).\nJadi jawaban yang benar adalah A dan B.',
  },

  // --- PILIHAN GANDA KOMPLEKS KATEGORI (2 SOAL) ---
  // Ketentuan: Setiap soal memiliki 3 deskripsi/pernyataan yang harus direspons Benar / Salah
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Pola Gambar & Penjumlahan 1-30',
    difficulty: 'Sukar',
    text: 'Amati gambar pola banyak kelereng di dalam Kotak A, B, C, dan D di bawah ini! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    illustration: {
      kind: 'pattern_marbles',
      caption: 'Pola banyak kelereng: Kotak A (4), Kotak B (8), Kotak C (12), Kotak D (16)',
    },
    statements: [
      {
        id: 's1',
        text: 'Pola banyak kelereng dari satu kotak ke kotak berikutnya selalu bertambah 4 kelereng.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika dibuat Kotak E setelah Kotak D sesuai pola, maka Kotak E berisi 20 kelereng.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah kelereng pada Kotak A dan Kotak C seluruhnya adalah 18 kelereng.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kotak A=4, B=8, C=12, D=16 -> selalu bertambah 4 kelereng tiap kotak (BENAR).\n2. Kotak E = 16 + 4 = 20 kelereng (BENAR).\n3. Jumlah Kotak A dan Kotak C = 4 + 12 = 16 kelereng, bukan 18 kelereng (SALAH).',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Letak Benda & Bangun Ruang',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar benda-benda di sekitar meja belajar berikut! Tentukan kebenaran dari setiap pernyataan mengenai letak dan bentuk benda (Pilih Benar atau Salah):',
    illustration: {
      kind: 'position_room_items',
      caption: 'Gambar posisi dan bentuk benda di sekitar meja belajar',
    },
    statements: [
      {
        id: 's1',
        text: 'Topi ulang tahun terletak di atas meja dan bentuknya menyerupai kerucut.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bola basket terletak di sebelah kanan meja belajar.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kotak mainan terletak di bawah meja dan bentuknya menyerupai balok.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Pada gambar, topi ulang tahun berada di atas meja dan bentuknya menyerupai kerucut (BENAR).\n2. Bola basket terletak di sebelah kiri meja belajar, bukan sebelah kanan (SALAH).\n3. Kotak mainan berada di bawah meja dan bentuknya menyerupai balok (BENAR).',
  },
];
