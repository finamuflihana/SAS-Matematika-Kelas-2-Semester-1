import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase A (Kelas 2) Mata Pelajaran Matematika
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 20 butir soal Kurikulum Merdeka Kelas 2 SD
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi penjumlahan bilangan cacah antara 1 sampai 30 menggunakan gambar benda konkret.',
    indikatorSoal:
      'Disajikan gambar dua kelompok buah apel (14 apel merah dan 13 apel hijau), peserta didik dapat menentukan hasil penjumlahan seluruh apel dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan soal cerita penjumlahan bilangan cacah antara 1 sampai 30.',
    indikatorSoal:
      'Disajikan soal cerita penambahan buku cerita di rak perpustakaan kelas, peserta didik dapat menghitung jumlah seluruh buku cerita.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi pengurangan bilangan cacah antara 2 sampai 30 menggunakan bantuan gambar.',
    indikatorSoal:
      'Disajikan gambar 24 balon dengan 9 balon bertanda silang (meletus), peserta didik dapat menentukan sisa balon yang masih utuh.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah sehari-hari yang berkaitan dengan pengurangan bilangan 2 sampai 30.',
    indikatorSoal:
      'Disajikan soal cerita tentang kue bolu yang dibagikan kepada tetangga, peserta didik dapat menghitung sisa kue bolu yang dimiliki.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung hasil pengurangan bilangan cacah antara 2 sampai 30 secara tepat.',
    indikatorSoal:
      'Disajikan operasi hitung pengurangan dua bilangan (30 - 17), peserta didik dapat menentukan hasil pengurangannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal dan menyebutkan nama bangun datar (trapesium) melalui gambar.',
    indikatorSoal:
      'Disajikan gambar bangun datar trapesium, peserta didik dapat mengidentifikasi nama bangun datar tersebut dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal dan menyebutkan nama bangun datar (jajar genjang) melalui gambar.',
    indikatorSoal:
      'Disajikan gambar bangun datar jajar genjang, peserta didik dapat menentukan nama bangun datar tersebut dengan benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi benda-benda di sekitar yang menyerupai bentuk bangun datar segitiga.',
    indikatorSoal:
      'Disajikan gambar rambu lalu lintas, peserta didik dapat menentukan nama bangun datar yang menyerupai bentuk rambu tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan contoh benda di lingkungan sekitar yang permukaannya menyerupai bangun datar persegi.',
    indikatorSoal:
      'Disajikan empat pilihan benda sehari-hari, peserta didik dapat memilih benda yang permukaannya menyerupai bentuk persegi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal dan menyebutkan nama bangun ruang (kerucut) berdasarkan gambar.',
    indikatorSoal:
      'Disajikan gambar bangun ruang kerucut, peserta didik dapat mengidentifikasi nama bangun ruang tersebut dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengaitkan benda-benda di lingkungan sekitar dengan bentuk bangun ruang (balok).',
    indikatorSoal:
      'Disajikan gambar kotak sepatu, peserta didik dapat menentukan nama bangun ruang yang menyerupai bentuk kotak sepatu tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat mengenali, melanjutkan, dan melengkapi pola gambar bangun datar sederhana.',
    indikatorSoal:
      'Disajikan deretan pola gambar berulang (lingkaran biru, segitiga kuning, persegi hijau), peserta didik dapat menentukan gambar yang tepat untuk melengkapi pola.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dan melengkapi pola gambar berdasarkan pertambahan jumlah objek.',
    indikatorSoal:
      'Disajikan pola jumlah gambar bintang pada Kotak 1, 2, dan 3, peserta didik dapat menentukan banyaknya bintang pada Kotak 4.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan letak suatu benda terhadap benda lain (atas, bawah, kiri, kanan) berdasarkan gambar.',
    indikatorSoal:
      'Disajikan gambar posisi beberapa benda di sekitar meja belajar, peserta didik dapat menentukan letak bola sepak terhadap meja.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mendeskripsikan posisi benda yang berada di antara dua benda lainnya pada gambar.',
    indikatorSoal:
      'Disajikan gambar tiga mainan tersusun sejajar di atas rak, peserta didik dapat menentukan letak mobil mainan terhadap mainan lainnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi beberapa kalimat matematika penjumlahan dan pengurangan bilangan 1 sampai 30.',
    indikatorSoal:
      'Disajikan tiga kalimat matematika penjumlahan dan pengurangan, peserta didik dapat memilih semua operasi yang menghasilkan nilai 20.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi benda-benda di sekitar yang menyerupai bentuk persegi panjang, belah ketupat, dan layang-layang.',
    indikatorSoal:
      'Disajikan gambar papan tulis, ketupat, dan layang-layang beserta tiga pernyataan, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi benda sehari-hari yang menyerupai bangun ruang kubus, kerucut, dan bola.',
    indikatorSoal:
      'Disajikan gambar dadu, topi ulang tahun, dan bola kasti beserta tiga pernyataan pasangan bentuknya, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis pola gambar jumlah benda serta menerapkan penjumlahan bilangan 1 sampai 30.',
    indikatorSoal:
      'Disajikan gambar pola kelereng dalam Kotak A, B, C, dan D, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) pada 3 pernyataan tentang aturan pola, kelanjutan pola, dan jumlah kelereng.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis letak suatu benda terhadap benda lain serta mengidentifikasi bentuk bangun ruang benda pada gambar.',
    indikatorSoal:
      'Disajikan gambar posisi benda-benda di sekitar meja belajar, peserta didik dapat menentukan kebenaran (Benar/Salah) dari 3 pernyataan mengenai letak benda dan bangun ruang yang menyerupainya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('pola')) {
    return 'Aljabar';
  }
  if (t.includes('bangun') || t.includes('letak') || t.includes('posisi') || t.includes('geometri')) {
    return 'Geometri';
  }
  if (t.includes('penjumlahan') || t.includes('pengurangan') || t.includes('bilangan')) {
    return 'Bilangan';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
