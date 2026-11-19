import React from 'react';
import { QuestionIllustration as QuestionIllustrationData } from '../types';

interface QuestionIllustrationProps {
  illustration?: QuestionIllustrationData;
  compact?: boolean;
}

export const QuestionIllustration: React.FC<QuestionIllustrationProps> = ({
  illustration,
  compact = false,
}) => {
  if (!illustration) return null;

  const maxW = compact ? 'max-w-sm' : 'max-w-lg';

  const renderSvg = () => {
    switch (illustration.kind) {
      case 'apples_addition': {
        // 14 apel merah + 13 apel hijau
        const renderDots = (
          count: number,
          startX: number,
          startY: number,
          cols: number,
          fill: string,
          stroke: string
        ) =>
          Array.from({ length: count }).map((_, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const cx = startX + col * 24;
            const cy = startY + row * 26;
            return (
              <g key={idx}>
                <circle cx={cx} cy={cy} r={8.5} fill={fill} stroke={stroke} strokeWidth="1.5" />
                <path
                  d={`M ${cx} ${cy - 8} Q ${cx + 3} ${cy - 13} ${cx + 6} ${cy - 11}`}
                  stroke="#15803d"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            );
          });

        return (
          <svg viewBox="0 0 460 155" className="w-full h-auto" role="img" aria-label="Ilustrasi 14 apel merah ditambah 13 apel hijau">
            {/* Kotak Kiri: 14 Apel Merah */}
            <rect x="10" y="12" width="190" height="130" rx="14" fill="#fff1f2" stroke="#fda4af" strokeWidth="2" />
            <text x="105" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#9f1239">
              14 Apel Merah
            </text>
            {renderDots(14, 34, 58, 7, '#ef4444', '#b91c1c')}

            {/* Tanda Tambah */}
            <circle cx="230" cy="77" r="18" fill="#dbeafe" stroke="#60a5fa" strokeWidth="2" />
            <text x="230" y="84" textAnchor="middle" fontSize="22" fontWeight="800" fill="#1d4ed8">
              +
            </text>

            {/* Kotak Kanan: 13 Apel Hijau */}
            <rect x="260" y="12" width="190" height="130" rx="14" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />
            <text x="355" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#166534">
              13 Apel Hijau
            </text>
            {renderDots(13, 284, 58, 7, '#22c55e', '#15803d')}
          </svg>
        );
      }

      case 'balloons_subtraction': {
        // 24 balon (3 baris x 8 kolom), 9 balon terakhir meletus (dicoret)
        const colors = ['#3b82f6', '#ef4444', '#eab308', '#a855f7', '#ec4899', '#10b981'];
        return (
          <svg viewBox="0 0 460 165" className="w-full h-auto" role="img" aria-label="Ilustrasi 24 balon dengan 9 balon meletus">
            <rect x="8" y="8" width="444" height="149" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <text x="230" y="28" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">
              24 Balon Budi (9 Balon Bertanda X = Meletus)
            </text>
            {Array.from({ length: 24 }).map((_, idx) => {
              const col = idx % 8;
              const row = Math.floor(idx / 8);
              const cx = 50 + col * 51;
              const cy = 56 + row * 38;
              const isPopped = idx >= 15; // 9 balon terakhir meletus
              const fill = isPopped ? '#e2e8f0' : colors[idx % colors.length];
              return (
                <g key={idx}>
                  <ellipse
                    cx={cx}
                    cy={cy}
                    rx="11"
                    ry="13"
                    fill={fill}
                    stroke={isPopped ? '#94a3b8' : '#1e293b'}
                    strokeWidth="1.5"
                    opacity={isPopped ? 0.65 : 1}
                  />
                  <line x1={cx} y1={cy + 13} x2={cx} y2={cy + 21} stroke="#64748b" strokeWidth="1.2" />
                  {isPopped && (
                    <g stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round">
                      <line x1={cx - 9} y1={cy - 9} x2={cx + 9} y2={cy + 9} />
                      <line x1={cx + 9} y1={cy - 9} x2={cx - 9} y2={cy + 9} />
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        );
      }

      case 'shape_trapezoid': {
        return (
          <svg viewBox="0 0 320 150" className="w-full h-auto" role="img" aria-label="Gambar bangun datar trapesium">
            <rect x="8" y="8" width="304" height="134" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            <polygon
              points="105,35 215,35 255,115 65,115"
              fill="#60a5fa"
              stroke="#1d4ed8"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      case 'shape_parallelogram': {
        return (
          <svg viewBox="0 0 320 150" className="w-full h-auto" role="img" aria-label="Gambar bangun datar jajar genjang">
            <rect x="8" y="8" width="304" height="134" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            <polygon
              points="100,35 255,35 220,115 65,115"
              fill="#34d399"
              stroke="#047857"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      case 'object_triangle_sign': {
        return (
          <svg viewBox="0 0 320 175" className="w-full h-auto" role="img" aria-label="Gambar rambu lalu lintas berbentuk segitiga">
            <rect x="8" y="8" width="304" height="159" rx="14" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="2" />
            {/* Tiang */}
            <rect x="155" y="105" width="10" height="52" fill="#64748b" rx="2" />
            <rect x="135" y="152" width="50" height="8" fill="#475569" rx="3" />
            {/* Rambu Segitiga */}
            <polygon
              points="160,24 220,112 100,112"
              fill="#fde047"
              stroke="#dc2626"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <text x="160" y="96" textAnchor="middle" fontSize="34" fontWeight="900" fill="#1e293b">
              !
            </text>
          </svg>
        );
      }

      case 'solid_cone': {
        return (
          <svg viewBox="0 0 320 165" className="w-full h-auto" role="img" aria-label="Gambar bangun ruang kerucut">
            <rect x="8" y="8" width="304" height="149" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            {/* Sisi kerucut */}
            <path d="M 160 24 L 105 122 A 55 18 0 0 0 215 122 Z" fill="#fb923c" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
            {/* Alas elips */}
            <ellipse cx="160" cy="122" rx="55" ry="18" fill="#fdba74" fillOpacity="0.6" stroke="#c2410c" strokeWidth="2.5" strokeDasharray="5 4" />
            <path d="M 105 122 A 55 18 0 0 0 215 122" fill="none" stroke="#c2410c" strokeWidth="3" />
          </svg>
        );
      }

      case 'object_shoebox': {
        return (
          <svg viewBox="0 0 340 165" className="w-full h-auto" role="img" aria-label="Gambar kotak sepatu berbentuk balok">
            <rect x="8" y="8" width="324" height="149" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            {/* Sisi depan kotak sepatu (Balok) */}
            <polygon points="65,68 220,68 220,132 65,132" fill="#93c5fd" stroke="#1e40af" strokeWidth="2.5" />
            {/* Sisi samping kanan */}
            <polygon points="220,68 275,42 275,104 220,132" fill="#60a5fa" stroke="#1e40af" strokeWidth="2.5" />
            {/* Tutup atas */}
            <polygon points="65,68 120,42 275,42 220,68" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2.5" />
            {/* Garis tutup kotak */}
            <polygon points="61,68 224,68 224,80 61,80" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />
            <polygon points="224,68 279,42 279,54 224,80" fill="#2563eb" stroke="#1e3a8a" strokeWidth="2" />
            <text x="142" y="110" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">
              KOTAK SEPATU
            </text>
          </svg>
        );
      }

      case 'pattern_shapes': {
        return (
          <svg viewBox="0 0 470 115" className="w-full h-auto" role="img" aria-label="Pola gambar lingkaran biru, segitiga kuning, persegi hijau">
            <rect x="6" y="6" width="458" height="103" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* 1. Lingkaran Biru */}
            <rect x="18" y="20" width="64" height="75" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <circle cx="50" cy="57" r="20" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2.5" />
            {/* 2. Segitiga Kuning */}
            <rect x="92" y="20" width="64" height="75" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <polygon points="124,36 146,76 102,76" fill="#facc15" stroke="#ca8a04" strokeWidth="2.5" strokeLinejoin="round" />
            {/* 3. Persegi Hijau */}
            <rect x="166" y="20" width="64" height="75" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="180" y="39" width="36" height="36" rx="3" fill="#22c55e" stroke="#15803d" strokeWidth="2.5" />
            {/* 4. Lingkaran Biru */}
            <rect x="240" y="20" width="64" height="75" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <circle cx="272" cy="57" r="20" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2.5" />
            {/* 5. Segitiga Kuning */}
            <rect x="314" y="20" width="64" height="75" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <polygon points="346,36 368,76 324,76" fill="#facc15" stroke="#ca8a04" strokeWidth="2.5" strokeLinejoin="round" />
            {/* 6. Tanda Tanya */}
            <rect x="388" y="20" width="64" height="75" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 4" />
            <text x="420" y="67" textAnchor="middle" fontSize="28" fontWeight="900" fill="#1d4ed8">
              ?
            </text>
          </svg>
        );
      }

      case 'pattern_stars': {
        const drawStar = (cx: number, cy: number, key: number) => (
          <polygon
            key={key}
            points={`${cx},${cy - 9} ${cx + 2.8},${cy - 3} ${cx + 9.2},${cy - 2.2} ${cx + 4.5},${cy + 2.2} ${cx + 5.7},${cy + 8.5} ${cx},${cy + 5.2} ${cx - 5.7},${cy + 8.5} ${cx - 4.5},${cy + 2.2} ${cx - 9.2},${cy - 2.2} ${cx - 2.8},${cy - 3}`}
            fill="#facc15"
            stroke="#ca8a04"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        );
        return (
          <svg viewBox="0 0 470 130" className="w-full h-auto" role="img" aria-label="Pola gambar jumlah bintang 2, 4, 6, dan tanda tanya">
            <rect x="6" y="6" width="458" height="118" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* Kotak 1: 2 bintang */}
            <rect x="18" y="18" width="98" height="94" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="67" y="34" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Kotak 1</text>
            {drawStar(52, 68, 1)}
            {drawStar(82, 68, 2)}

            {/* Kotak 2: 4 bintang */}
            <rect x="128" y="18" width="98" height="94" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="177" y="34" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Kotak 2</text>
            {drawStar(162, 57, 3)}
            {drawStar(192, 57, 4)}
            {drawStar(162, 85, 5)}
            {drawStar(192, 85, 6)}

            {/* Kotak 3: 6 bintang */}
            <rect x="238" y="18" width="106" height="94" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="291" y="34" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">Kotak 3</text>
            {drawStar(263, 57, 7)}
            {drawStar(291, 57, 8)}
            {drawStar(319, 57, 9)}
            {drawStar(263, 85, 10)}
            {drawStar(291, 85, 11)}
            {drawStar(319, 85, 12)}

            {/* Kotak 4: ? */}
            <rect x="356" y="18" width="96" height="94" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 4" />
            <text x="404" y="34" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">Kotak 4</text>
            <text x="404" y="80" textAnchor="middle" fontSize="30" fontWeight="900" fill="#1d4ed8">?</text>
          </svg>
        );
      }

      case 'position_desk': {
        return (
          <svg viewBox="0 0 460 195" className="w-full h-auto" role="img" aria-label="Gambar meja belajar dengan lampu, buku, gelas pensil di atas meja, bola sepak di bawah meja, dan tempat sampah di kanan meja">
            <rect x="8" y="8" width="444" height="179" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* Lantai */}
            <line x1="20" y1="168" x2="440" y2="168" stroke="#94a3b8" strokeWidth="2.5" />

            {/* Meja Belajar */}
            <rect x="95" y="92" width="220" height="14" rx="3" fill="#d97706" stroke="#78350f" strokeWidth="2" />
            <rect x="110" y="106" width="14" height="62" fill="#b45309" stroke="#78350f" strokeWidth="2" />
            <rect x="286" y="106" width="14" height="62" fill="#b45309" stroke="#78350f" strokeWidth="2" />

            {/* Lampu belajar (kiri di atas meja) */}
            <rect x="114" y="84" width="28" height="8" rx="3" fill="#334155" />
            <path d="M 128 84 L 122 54 L 144 46" stroke="#475569" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <polygon points="136,42 158,36 154,58 134,54" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <text x="132" y="31" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">Lampu</text>

            {/* Buku (tengah di atas meja) */}
            <rect x="180" y="76" width="48" height="16" rx="2" fill="#ef4444" stroke="#991b1b" strokeWidth="1.8" />
            <rect x="184" y="79" width="40" height="5" fill="#fef2f2" />
            <text x="204" y="69" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">Buku</text>

            {/* Gelas Pensil (kanan di atas meja) */}
            <rect x="255" y="68" width="24" height="24" rx="3" fill="#10b981" stroke="#065f46" strokeWidth="1.8" />
            <line x1="262" y1="68" x2="259" y2="52" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <line x1="271" y1="68" x2="275" y2="54" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
            <text x="267" y="45" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">Pensil</text>

            {/* Bola Sepak (di bawah meja) */}
            <circle cx="205" cy="147" r="20" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
            <polygon points="205,137 213,143 210,153 200,153 197,143" fill="#1e293b" />
            <text x="205" y="182" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">Bola Sepak</text>

            {/* Tempat Sampah (di sebelah kanan meja) */}
            <polygon points="355,124 395,124 390,168 360,168" fill="#64748b" stroke="#334155" strokeWidth="2" />
            <rect x="352" y="118" width="46" height="6" rx="2" fill="#475569" />
            <text x="375" y="112" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">Tempat Sampah</text>
          </svg>
        );
      }

      case 'position_shelf': {
        return (
          <svg viewBox="0 0 460 150" className="w-full h-auto" role="img" aria-label="Gambar rak mainan dengan boneka beruang di kiri, mobil mainan di tengah, dan robot di kanan">
            <rect x="8" y="8" width="444" height="134" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* Papan Rak */}
            <rect x="30" y="104" width="400" height="14" rx="4" fill="#d97706" stroke="#78350f" strokeWidth="2" />

            {/* Kiri: Boneka Beruang */}
            <circle cx="85" cy="52" r="10" fill="#a16207" />
            <circle cx="115" cy="52" r="10" fill="#a16207" />
            <circle cx="100" cy="66" r="18" fill="#ca8a04" stroke="#713f12" strokeWidth="2" />
            <ellipse cx="100" cy="92" rx="16" ry="13" fill="#ca8a04" stroke="#713f12" strokeWidth="2" />
            <circle cx="94" cy="62" r="2.2" fill="#1e293b" />
            <circle cx="106" cy="62" r="2.2" fill="#1e293b" />
            <ellipse cx="100" cy="70" rx="6" ry="4.5" fill="#fef08a" />
            <text x="100" y="133" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
              Boneka Beruang
            </text>

            {/* Tengah: Mobil Mainan */}
            <rect x="195" y="72" width="70" height="22" rx="6" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <path d="M 208 72 L 218 54 L 246 54 L 256 72 Z" fill="#fca5a5" stroke="#991b1b" strokeWidth="2" />
            <circle cx="212" cy="96" r="8" fill="#1e293b" />
            <circle cx="248" cy="96" r="8" fill="#1e293b" />
            <text x="230" y="133" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">
              Mobil Mainan
            </text>

            {/* Kanan: Robot */}
            <line x1="360" y1="38" x2="360" y2="48" stroke="#475569" strokeWidth="2.5" />
            <circle cx="360" cy="36" r="3.5" fill="#ef4444" />
            <rect x="342" y="48" width="36" height="24" rx="5" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
            <circle cx="352" cy="58" r="3" fill="#fef08a" />
            <circle cx="368" cy="58" r="3" fill="#fef08a" />
            <rect x="336" y="74" width="48" height="30" rx="4" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
            <text x="360" y="133" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
              Robot
            </text>
          </svg>
        );
      }

      case 'objects_flat_shapes': {
        return (
          <svg viewBox="0 0 460 145" className="w-full h-auto" role="img" aria-label="Gambar papan tulis, ketupat lebaran, dan layang-layang">
            <rect x="8" y="8" width="444" height="129" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* 1. Papan Tulis (Persegi Panjang) */}
            <rect x="26" y="28" width="120" height="72" rx="4" fill="#15803d" stroke="#92400e" strokeWidth="5" />
            <text x="86" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">Kelas 2</text>
            <text x="86" y="122" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Papan Tulis</text>

            {/* 2. Ketupat (Belah Ketupat) */}
            <polygon points="230,22 270,62 230,102 190,62" fill="#84cc16" stroke="#3f6212" strokeWidth="2.5" />
            <line x1="210" y1="42" x2="250" y2="82" stroke="#3f6212" strokeWidth="1.5" />
            <line x1="250" y1="42" x2="210" y2="82" stroke="#3f6212" strokeWidth="1.5" />
            <text x="230" y="122" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Ketupat</text>

            {/* 3. Layang-layang */}
            <polygon points="370,18 408,52 370,104 332,52" fill="#f43f5e" stroke="#881337" strokeWidth="2.5" />
            <line x1="370" y1="18" x2="370" y2="104" stroke="#ffe4e6" strokeWidth="1.8" />
            <line x1="332" y1="52" x2="408" y2="52" stroke="#ffe4e6" strokeWidth="1.8" />
            <text x="370" y="122" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Layang-layang</text>
          </svg>
        );
      }

      case 'objects_solid_shapes': {
        return (
          <svg viewBox="0 0 460 150" className="w-full h-auto" role="img" aria-label="Gambar dadu kubus, topi ulang tahun kerucut, dan bola kasti">
            <rect x="8" y="8" width="444" height="134" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* 1. Dadu (Kubus) */}
            <polygon points="48,54 98,54 98,104 48,104" fill="#fef2f2" stroke="#991b1b" strokeWidth="2.2" />
            <polygon points="48,54 68,36 118,36 98,54" fill="#fee2e2" stroke="#991b1b" strokeWidth="2.2" />
            <polygon points="98,54 118,36 118,86 98,104" fill="#fecaca" stroke="#991b1b" strokeWidth="2.2" />
            <circle cx="63" cy="69" r="3.5" fill="#991b1b" />
            <circle cx="83" cy="89" r="3.5" fill="#991b1b" />
            <circle cx="73" cy="79" r="3.5" fill="#991b1b" />
            <text x="83" y="126" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Dadu</text>

            {/* 2. Topi Ulang Tahun (Kerucut) */}
            <path d="M 230 28 L 190 104 A 40 12 0 0 0 270 104 Z" fill="#a855f7" stroke="#6b21a8" strokeWidth="2.5" />
            <circle cx="230" cy="26" r="6" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="230" y="126" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Topi Ulang Tahun</text>

            {/* 3. Bola Kasti (Bola) */}
            <circle cx="372" cy="70" r="34" fill="#a3e635" stroke="#3f6212" strokeWidth="2.5" />
            <path d="M 350 44 Q 372 70 350 96" fill="none" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M 394 44 Q 372 70 394 96" fill="none" stroke="#ffffff" strokeWidth="2.5" />
            <text x="372" y="126" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Bola Kasti</text>
          </svg>
        );
      }

      case 'pattern_marbles': {
        const renderBox = (label: string, count: number, x: number) => (
          <g key={label}>
            <rect x={x} y="16" width="96" height="106" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.8" />
            <text x={x + 48} y="34" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1e3a8a">
              {label} ({count})
            </text>
            {Array.from({ length: count }).map((_, i) => {
              const col = i % 4;
              const row = Math.floor(i / 4);
              const cx = x + 21 + col * 18;
              const cy = 51 + row * 17;
              return <circle key={i} cx={cx} cy={cy} r="6.2" fill="#38bdf8" stroke="#0369a1" strokeWidth="1.5" />;
            })}
          </g>
        );

        return (
          <svg viewBox="0 0 460 138" className="w-full h-auto" role="img" aria-label="Pola banyak kelereng di Kotak A (4), B (8), C (12), dan D (16)">
            <rect x="6" y="6" width="448" height="126" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {renderBox('Kotak A', 4, 18)}
            {renderBox('Kotak B', 8, 126)}
            {renderBox('Kotak C', 12, 234)}
            {renderBox('Kotak D', 16, 342)}
          </svg>
        );
      }

      case 'position_room_items': {
        return (
          <svg viewBox="0 0 460 195" className="w-full h-auto" role="img" aria-label="Gambar meja belajar dengan topi ulang tahun dan buku gambar di atas meja, bola basket di sebelah kiri meja, dan kotak mainan di bawah meja">
            <rect x="8" y="8" width="444" height="179" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* Lantai */}
            <line x1="20" y1="168" x2="440" y2="168" stroke="#94a3b8" strokeWidth="2.5" />

            {/* Sebelah kiri meja: Bola Basket */}
            <circle cx="68" cy="144" r="22" fill="#f97316" stroke="#9a3412" strokeWidth="2.2" />
            <line x1="46" y1="144" x2="90" y2="144" stroke="#7c2d12" strokeWidth="1.5" />
            <line x1="68" y1="122" x2="68" y2="166" stroke="#7c2d12" strokeWidth="1.5" />
            <text x="68" y="182" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#334155">Bola Basket</text>

            {/* Meja Belajar */}
            <rect x="135" y="94" width="225" height="14" rx="3" fill="#d97706" stroke="#78350f" strokeWidth="2" />
            <rect x="150" y="108" width="14" height="60" fill="#b45309" stroke="#78350f" strokeWidth="2" />
            <rect x="330" y="108" width="14" height="60" fill="#b45309" stroke="#78350f" strokeWidth="2" />

            {/* Di atas meja: Topi Ulang Tahun (kerucut) */}
            <path d="M 192 40 L 166 92 A 26 7 0 0 0 218 92 Z" fill="#a855f7" stroke="#6b21a8" strokeWidth="2" />
            <circle cx="192" cy="38" r="4.5" fill="#facc15" />
            <text x="192" y="28" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">Topi Ulang Tahun</text>

            {/* Di atas meja: Buku Gambar (persegi panjang) */}
            <rect x="262" y="76" width="60" height="18" rx="2" fill="#3b82f6" stroke="#1e40af" strokeWidth="1.8" />
            <text x="292" y="69" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">Buku Gambar</text>

            {/* Di bawah meja: Kotak Mainan (balok) */}
            <polygon points="210,136 276,136 276,166 210,166" fill="#22c55e" stroke="#166534" strokeWidth="2" />
            <polygon points="210,136 226,125 292,125 276,136" fill="#86efac" stroke="#166534" strokeWidth="2" />
            <polygon points="276,136 292,125 292,155 276,166" fill="#16a34a" stroke="#166534" strokeWidth="2" />
            <text x="246" y="182" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#334155">Kotak Mainan</text>
          </svg>
        );
      }

      default:
        return null;
    }
  };

  const svgContent = renderSvg();
  if (!svgContent) return null;

  return (
    <figure className={`my-4 ${maxW} mx-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-2xs`}>
      {svgContent}
      {illustration.caption && (
        <figcaption className="mt-2 text-center text-[11px] font-semibold text-slate-500">
          {illustration.caption}
        </figcaption>
      )}
    </figure>
  );
};
