'use client';
import { motion } from 'motion/react';

import CuriculumCard from '../../features/curriculum/components/curiculumCard';

import { Merienda, Kalam } from 'next/font/google';

import { TbPointerCollaboration2 } from 'react-icons/tb';
import { FaLanguage } from 'react-icons/fa6';
import { GiPrayerBeads, GiClover } from 'react-icons/gi';
import { FaQuran } from 'react-icons/fa';
import { RiRunFill } from 'react-icons/ri';
import ProgramCard from '../../features/curriculum/components/programCard';

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

export default function SchoolCurriculum() {
  return (
    <>
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
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <CuriculumCard
            text="Integrasi Kurikulum"
            icon={TbPointerCollaboration2}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <CuriculumCard text="Tahsin & Tahfizh" icon={FaQuran} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        >
          <CuriculumCard text="Pembiasaan Ibadah" icon={GiPrayerBeads} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <CuriculumCard text="Literasi & Bahasa" icon={FaLanguage} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <CuriculumCard text="Sunnah Lifestyle" icon={GiClover} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        >
          <CuriculumCard text="Kegiatan Motorik" icon={RiRunFill} />
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <ProgramCard
            imageUrl="/gallery-images/15.jpg"
            title="Kelompok Bermain (KB)"
            age="Usia 3 - 4 Tahun"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <ProgramCard
            imageUrl="/gallery-images/19.jpg"
            title="TK-A"
            age="Usia 4 - 5 Tahun"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <ProgramCard
            imageUrl="/gallery-images/8.jpg"
            title="TK-B"
            age="Usia 5 - 6 Tahun"
          />
        </motion.div>
      </div>
    </>
  );
}
