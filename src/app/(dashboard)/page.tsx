import { Merienda, Kalam, Crimson_Text } from 'next/font/google';
import Image from 'next/image';

import { TbHandClick } from 'react-icons/tb';
import TestimoniCard from '../features/home/components/testimoni';

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

export default function Homepage() {
  return (
    <>
      <div className="breadcrumbs text-xs md:text-sm">
        <ul>
          <li>Home</li>
        </ul>
      </div>
      <div className="relative -mx-5 mt-4 h-50 md:h-80 bg-[url('/Hero-section-compressed.svg')] bg-cover bg-no-repeat bg-center">
        <Image
          src="/images/welcome.svg"
          alt="Welcome to Our Website"
          width={400}
          height={100}
          className="absolute left-1/2 -translate-x-1/2 top-4 md:top-2 h-auto md:w-150"
        />
        <Image
          src="/images/belajar-ceria.svg"
          alt="Siswa TK IT Arisya Al-Karim"
          width={250}
          height={100}
          className="absolute left-1/2 -translate-x-1/2 bottom-2 h-auto md:w-100"
        />
      </div>
      <div className="p-3 -mx-5 bg-brand-100">
        <h2
          className={`h-fit flex justify-center items-center ${merienda.className} text-[9px] md:text-[19px] text-white font-semibold`}
        >
          Rumah kedua bagi si kecil untuk belajar dan tumbuh dalam nilai-nilai
          Islami.
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 justify-around gap-5">
        <div className="p-1 aura text-brand-100 bg-yellow-300">
          <p className="h-fit w-fit p-3 bg-brand-700 text-[15px] md:text-lg text-black rounded-lg">
            Kami percaya setiap anak adalah amanah istimewa. Misi kami adalah
            membentuk fondasi akhlak mulia, kecintaan pada Al-Qur'an, dan
            semangat belajar yang menyenangkan
          </p>
        </div>
        <div className="p-1 aura text-brand-100 bg-yellow-300">
          <p className="h-fit w-fit p-3 bg-brand-700 text-[15px] md:text-lg text-black rounded-lg">
            Membersamai tumbuh kembang anak dengan cinta, membimbing mereka
            mengenal Al-Qur'an, dan membentuk akhlak mulia agar kelak menjadi
            generasi Qur'ani yang cerdas dan bermanfaat.
          </p>
        </div>
      </div>
      <div className="mt-20 mx-9 grid grid-cols-1 gap-10">
        <TestimoniCard
          name="Ibu Salma"
          text='"Alhamdulillah, anak saya jadi hafal banyak surat pendek dan lebih mandiri sejak sekolah di sini. Terima kasih, Bu Guru!"'
        />
        <TestimoniCard
          name="Bapak Yusuf"
          text='"Gurunya sabar dan penuh kasih sayang. Anak saya selalu semangat berangkat sekolah setiap hari."'
        />
        <TestimoniCard
          name="Ibu Nadia"
          text='"Suasana belajarnya nyaman seperti di rumah. Anak saya jadi lebih rajin salat dan berdoa sejak masuk TK IT Arisya."'
        />
      </div>
      <div className="mt-20 flex justify-center items-center gap-2 text-xs md:text-lg text-black font-semibold">
        <TbHandClick />
        <h2>Click one to explore more about TK IT Arisya Al-Karim</h2>
      </div>
      <div className="mt-7 flex justify-around">
        <button className="w-fit h-fit p-3 text-[8px] md:text-lg btn btn-success text-white">
          <a href="">Enroll Now</a>
        </button>
        <button className="w-fit h-fit p-3 text-[8px] md:text-lg btn btn-primary text-white">
          <a href="about-us">About Us</a>
        </button>
        <button className="w-fit h-fit p-3 text-[8px] md:text-lg btn btn-secondary">
          <a href="curriculum">Programs</a>
        </button>
        <button className="w-fit h-fit p-3 text-[8px] md:text-lg btn btn-warning text-white">
          <a href="team">Teachers</a>
        </button>
        <button className="w-fit h-fit p-3 text-[8px] md:text-lg btn btn-info text-white">
          <a href="contact-us">Contact Us</a>
        </button>
      </div>
    </>
  );
}
