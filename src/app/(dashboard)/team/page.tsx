'use client';
import { motion } from 'motion/react';

import StaffCard from '../../features/team/components/staffCard';

import { Merienda, Kalam } from 'next/font/google';

import { BsPersonCheck } from 'react-icons/bs';
import { IoPersonCircleSharp } from 'react-icons/io5';

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

export default function SchoolTeam() {
  return (
    <>
      <h1
        id="team"
        className={`mt-5 flex justify-center ${merienda.className} text-2xl md:text-3xl lg:text-4xl text-brand-100`}
      >
        MEET OUR SCHOOL TEAM
      </h1>
      <p
        className={`flex justify-center mt-2 ${kalam.className} text-xl md:text-2xl lg:text-3xl text-brand-200`}
      >
        Leaders & Teachers
      </p>
      <h1
        className={`mt-15 flex text-2xl md:text-4xl justify-center ${merienda.className} text-black`}
      >
        The Leaders
      </h1>
      <div className="mt-6 flex w-full justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <StaffCard
              imageSrc="/images/bunda-erna.jpg"
              icon={BsPersonCheck}
              title="KETUA YAYASAN"
              name="Miss Erna Widyasari, S. Kom."
              almamater="Universitas Dian Nuswantoro"
              jurusan="Manajemen Informatika"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <StaffCard
              imageSrc="/images/miss-anita.jpg"
              icon={BsPersonCheck}
              title="KEPALA SEKOLAH"
              name="Miss Anita Jhuliani"
              almamater="Institut Ilmu Agama Shalahuddin Al Ayyubi"
              jurusan="Pendidikan Agama Islam"
            />
          </motion.div>
        </div>
      </div>
      <h1
        className={`mt-23 flex text-2xl md:text-4xl justify-center ${merienda.className} text-black`}
      >
        The Teachers
      </h1>
      <div className="mt-6 flex w-full justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <StaffCard
              imageSrc="/images/miss-anita.jpg"
              icon={IoPersonCircleSharp}
              title="GURU KB"
              name="Miss Anita Jhuliani"
              almamater="Institut Ilmu Agama Shalahuddin Al Ayyubi"
              jurusan="Pendidikan Agama Islam"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <StaffCard
              imageSrc="/images/miss-fitri.jpg"
              icon={IoPersonCircleSharp}
              title="GURU TK-A"
              name="Miss Fitri Fidia Alawiah"
              almamater="Universitas Terbuka"
              jurusan="Hukum Ilmu Sosial dan Politik"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <StaffCard
              imageSrc="/images/miss-fitha.jpg"
              icon={IoPersonCircleSharp}
              title="GURU TK-B"
              name="Miss Anggraeni Nurfita L."
              almamater="Institut Ilmu Agama Shalahuddin Al Ayyubi"
              jurusan="Pendidikan Agama Islam"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
