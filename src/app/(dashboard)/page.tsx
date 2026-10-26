'use client';
import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

import Image from 'next/image';
import Link from 'next/link';

import { TbHandClick } from 'react-icons/tb';
import TestimoniCard from '../features/home/components/testimoni';

const testimonials = [
  {
    name: 'Ibu Salma',
    text: '"Alhamdulillah, anak saya jadi hafal banyak surat pendek dan lebih mandiri sejak sekolah di sini. Terima kasih, Bu Guru!"',
  },
  {
    name: 'Bapak Yusuf',
    text: '"Gurunya sabar dan penuh kasih sayang. Anak saya selalu semangat berangkat sekolah setiap hari."',
  },
  {
    name: 'Ibu Nadia',
    text: '"Suasana belajarnya nyaman seperti di rumah. Anak saya jadi lebih rajin salat dan berdoa sejak masuk TK IT Arisya."',
  },
];

const visionCards = [
  `Kami percaya setiap anak adalah amanah istimewa. Misi kami adalah membentuk fondasi akhlak mulia, kecintaan pada Al-Qur'an, dan semangat belajar yang menyenangkan`,
  `Membersamai tumbuh kembang anak dengan cinta, membimbing mereka mengenal Al-Qur'an, dan membentuk akhlak mulia agar kelak menjadi generasi Qur'ani yang cerdas dan bermanfaat.`,
];

const menuButtons = [
  { href: '#', label: 'Enroll Now', style: 'bg-brand-400 hover:bg-brand-100' },
  { href: '/about-us', label: 'About Us', style: 'bg-brand-200 hover:bg-brand-200-deep' },
  { href: '/programs', label: 'Programs', style: 'bg-brand-200 hover:bg-brand-200-deep' },
  { href: '/team', label: 'Teachers', style: 'bg-brand-200 hover:bg-brand-200-deep' },
];

export default function Homepage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative -mx-5 h-50 md:h-80 lg:h-130 bg-[url('/Hero-section-compressed.svg')] bg-cover bg-no-repeat bg-center">
        <Image
          src="/images/welcome.svg"
          alt="Welcome to Our Website"
          width={400}
          height={100}
          priority
          className="absolute left-1/2 -translate-x-1/2 top-4 md:top-2 h-auto md:w-150 lg:w-280"
        />
        <Image
          src="/images/belajar-ceria.svg"
          alt="Belajar ceria, Tumbuh bahagia"
          width={250}
          height={100}
          priority
          className="absolute left-1/2 -translate-x-1/2 bottom-2 h-auto md:w-100 lg:w-170"
        />
      </div>

      <div className="p-3 -mx-5 bg-brand-300-soft">
        <h2
          className={`h-fit flex justify-center items-center font-display text-[9px] md:text-[19px] lg:text-[35px] text-brand-200 font-semibold`}
        >
          Rumah kedua bagi si kecil untuk belajar dan tumbuh dalam nilai-nilai
          Islami.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-around gap-5">
        {visionCards.map((text, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
            className="p-1"
          >
            <p className="h-fit w-fit p-3 bg-brand-200-soft border border-brand-200/15 text-[15px] md:text-lg text-ink rounded-2xl shadow-sm">
              {text}
            </p>
          </m.div>
        ))}
      </div>

      <h1
        className={`mt-15 flex text-xl md:text-4xl justify-center font-display font-medium text-brand-200`}
      >
        What they say about us?
      </h1>

      <div className="mt-6 mx-9 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <m.div
            key={t.name}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
          >
            <TestimoniCard name={t.name} text={t.text} />
          </m.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center items-center gap-2 text-xs md:text-lg lg:text-xl text-ink-muted font-semibold">
        <TbHandClick className="text-brand-400" />
        <h2>Click one to explore more about TK IT Arisya Al-Karim</h2>
      </div>

      <div className="mt-7 lg:mt-12 flex justify-around">
        {menuButtons.map((b) => (
          <Link
            key={b.label}
            href={b.href}
            className={`w-fit h-fit p-3 text-[8px] md:text-lg lg:text-2xl btn border-none ${b.style} text-white transition duration-300 hover:scale-110 hover:-translate-y-1`}
          >
            {b.label}
          </Link>
        ))}
        <Link
          className="btn border-none bg-brand-400 hover:bg-brand-100 w-fit h-fit p-3 text-[8px] md:text-lg lg:text-2xl text-white transition duration-300 hover:scale-110 hover:-translate-y-1"
          href="https://wa.link/j7cj8z"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </Link>
      </div>
    </LazyMotion>
  );
}
