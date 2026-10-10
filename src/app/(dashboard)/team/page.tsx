'use client';
import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

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

const leaders = [
  {
    imageSrc: '/images/bunda-erna.jpg',
    title: 'KETUA YAYASAN',
    name: 'Miss Erna Widyasari, S. Kom.',
    almamater: 'Universitas Dian Nuswantoro',
    jurusan: 'Manajemen Informatika',
  },
  {
    imageSrc: '/images/miss-anita.jpg',
    title: 'KEPALA SEKOLAH',
    name: 'Miss Anita Jhuliani',
    almamater: 'Institut Ilmu Agama Shalahuddin Al Ayyubi',
    jurusan: 'Pendidikan Agama Islam',
  },
];

const teachers = [
  {
    imageSrc: '/images/miss-anita.jpg',
    title: 'GURU KB',
    name: 'Miss Anita Jhuliani',
    almamater: 'Institut Ilmu Agama Shalahuddin Al Ayyubi',
    jurusan: 'Pendidikan Agama Islam',
  },
  {
    imageSrc: '/images/miss-fitri.jpg',
    title: 'GURU TK-A',
    name: 'Miss Fitri Fidia Alawiah',
    almamater: 'Universitas Terbuka',
    jurusan: 'Hukum Ilmu Sosial dan Politik',
  },
  {
    imageSrc: '/images/miss-fitha.jpg',
    title: 'GURU TK-B',
    name: 'Miss Anggraeni Nurfita L.',
    almamater: 'Institut Ilmu Agama Shalahuddin Al Ayyubi',
    jurusan: 'Pendidikan Agama Islam',
  },
];

export default function SchoolTeam() {
  return (
    <LazyMotion features={domAnimation}>
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
          {leaders.map((p, i) => (
            <m.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.1, ease: 'easeOut' }}
            >
              <StaffCard
                imageSrc={p.imageSrc}
                icon={BsPersonCheck}
                title={p.title}
                name={p.name}
                almamater={p.almamater}
                jurusan={p.jurusan}
              />
            </m.div>
          ))}
        </div>
      </div>

      <h1
        className={`mt-23 flex text-2xl md:text-4xl justify-center ${merienda.className} text-black`}
      >
        The Teachers
      </h1>
      <div className="mt-6 flex w-full justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-30">
          {teachers.map((p, i) => (
            <m.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.1, ease: 'easeOut' }}
            >
              <StaffCard
                imageSrc={p.imageSrc}
                icon={IoPersonCircleSharp}
                title={p.title}
                name={p.name}
                almamater={p.almamater}
                jurusan={p.jurusan}
              />
            </m.div>
          ))}
        </div>
      </div>
    </LazyMotion>
  );
}
