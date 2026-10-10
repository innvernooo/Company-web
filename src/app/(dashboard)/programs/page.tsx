'use client';
import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

import CuriculumCard from '../../features/curriculum/components/curiculumCard';
import ProgramCard from '../../features/curriculum/components/programCard';

import { Merienda, Kalam } from 'next/font/google';

import { TbPointerCollaboration2 } from 'react-icons/tb';
import { FaLanguage } from 'react-icons/fa6';
import { GiPrayerBeads, GiClover } from 'react-icons/gi';
import { FaQuran } from 'react-icons/fa';
import { RiRunFill } from 'react-icons/ri';

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

const curriculum = [
  { text: 'Integrasi Kurikulum', icon: TbPointerCollaboration2 },
  { text: 'Tahsin & Tahfizh', icon: FaQuran },
  { text: 'Pembiasaan Ibadah', icon: GiPrayerBeads },
  { text: 'Literasi & Bahasa', icon: FaLanguage },
  { text: 'Sunnah Lifestyle', icon: GiClover },
  { text: 'Kegiatan Motorik', icon: RiRunFill },
];

const programs = [
  {
    imageUrl: '/images/kb.jpg',
    alt: 'Kelas KB',
    title: 'Kelompok Bermain (KB)',
    age: 'Usia 3 - 4 Tahun',
  },
  {
    imageUrl: '/images/tk-a.jpg',
    alt: 'Kelas TK A',
    title: 'TK-A',
    age: 'Usia 4 - 5 Tahun',
  },
  {
    imageUrl: '/images/tk-b.jpg',
    alt: 'Kelas TK B',
    title: 'TK-B',
    age: 'Usia 5 - 6 Tahun',
  },
];

export default function SchoolCurriculum() {
  return (
    <LazyMotion features={domAnimation}>
      <h1
        className={`mt-5 flex justify-center ${merienda.className} text-2xl md:text-3xl lg:text-4xl text-brand-100`}
      >
        KURIKULUM UNGGULAN SEKOLAH
      </h1>
      <p
        className={`flex justify-center mt-2 ${kalam.className} text-xl md:text-2xl lg:text-3xl text-brand-200`}
      >
        Membentuk karakter, Mengembangkan potensi
      </p>

      <div
        id="curriculum"
        className="scroll-mt-20 mt-8 mx-6 grid grid-cols-2 lg:grid-cols-3 gap-7 text-black"
      >
        {curriculum.map((item, i) => (
          <m.div
            key={item.text}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            // stagger memakai delay, bukan duration yang makin panjang
            transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
          >
            <CuriculumCard text={item.text} icon={item.icon} />
          </m.div>
        ))}
      </div>

      <h1
        className={`mt-20 flex justify-center ${merienda.className} text-2xl md:text-3xl lg:text-4xl text-brand-100`}
      >
        PROGRAM TK IT ARISYA
      </h1>
      <p
        className={`flex justify-center mt-2 ${kalam.className} text-xl md:text-2xl lg:text-3xl text-brand-200`}
      >
        Jenjang Pendidikan Usia 4 - 6 Tahun
      </p>

      <div className="mt-10 mx-10 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-15">
        {programs.map((p, i) => (
          <m.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
          >
            <ProgramCard
              imageUrl={p.imageUrl}
              alt={p.alt}
              title={p.title}
              age={p.age}
            />
          </m.div>
        ))}
      </div>
    </LazyMotion>
  );
}
