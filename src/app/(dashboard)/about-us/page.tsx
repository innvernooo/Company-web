import { Merienda, Kalam } from 'next/font/google';
import Image from 'next/image';
import SchoolMissions from '@/app/features/about-us/components/schoolMissions';

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

export default function AboutUs() {
  return (
    <>
      <div
        className="p-10 grid grid-cols-1 lg:grid-cols-[30%_60%] gap-20 lg:gap-8 h-fit"
      >
        <div className="flex justify-center">
          <Image
            src="/images/about-us-photo-compressed.jpg"
            alt="Siswa TK IT Arisya Al-Karim"
            width={300}
            height={300}
            className="shadow-2xl rounded-3xl"
          />
        </div>
        <div>
          <h1 className={`${kalam.className} text-brand-200 text-3xl lg:text-4xl`}>
            Sekilas tentang
          </h1>
          <h1 className={`${merienda.className} text-brand-100 text-2xl md:text-3xl lg:text-4xl`}>
            TK IT ARISYA AL-KARIM
          </h1>
          <p className="mt-3 text-lg lg:text-2xl leading-relaxed">
            TK IT ARISYA AL-KARIM adalah lembaga pendidikan anak usia dini yang
            berlokasi di Cengkareng, Jakarta Barat, DKI Jakarta.
            <br />
            Mulai beroperasi pada tahun 2026, sekolah ini hadir sebagai wadah
            pendidikan bagi anak-anak usia dini dengan mengintegrasikan
            kurikulum nasional bersama nilai-nilai keislaman dalam setiap
            kegiatan belajarnya.
            <br /> TK IT ARISYA berkomitmen untuk membentuk generasi anak yang
            cerdas, kreatif, mandiri, dan berakhlak mulia sejak dini.
          </p>
        </div>
      </div>
      <div className="px-10 py-5 mt-10 grid grid-cols-1 lg:grid-cols-[30%_60%] gap-20 lg:gap-8 h-fit">
        <div className="w-full flex justify-center">
          <Image
            src="/images/logo-yayasan.svg"
            alt="Siswa TK IT Arisya Al-Karim"
            width={300}
            height={300}
          />
        </div>
        <div>
          <h1 className={`${kalam.className} text-brand-200 text-3xl lg:text-4xl`}>
            Berdiri di bawah naungan
          </h1>
          <h1 className={`${merienda.className} text-brand-100 text-2xl md:text-3xl lg:text-4xl`}>
            YAYASAN TARBIYATUL ARISYA ALKARIIM
          </h1>
          <p className="mt-3 text-lg lg:text-2xl leading-relaxed">
            TK IT ARISYA AL-KARIM merupakan lembaga pendidikan yang berada di
            bawah naungan Yayasan Tarbiyatul Arisya AlKariim*.
            <br />
            Yayasan Tarbiyatul Arisya AlKariim menjadi landasan bagi TK IT
            ARISYA untuk terus berkembang sebagai lembaga pendidikan yang
            terpercaya dan berorientasi pada pembentukan karakter islami anak.
          </p>
          <p className="mt-2 text-red-600">
            *SK AHU-0011997.AH.01.04.Tahun 2023{' '}
          </p>
        </div>
      </div>
      <div className="mt-20 mx-10 h-fit p-7 bg-brand-700 border-4 rounded-3xl">
        <h1 className={`${merienda.className} text-brand-200 text-lg md:text-2xl lg:text-3xl`}>
          SCHOOL'S VISION
        </h1>
        <p className="mt-4 text-md md:text-lg lg:text-xl">
          Mewujudkan generasi anak usia dini yang beriman, bertakwa, cerdas,
          kreatif, mandiri, dan berakhlak mulia sesuai tuntunan Al-Qur'an dan
          Sunnah.
        </p>
      </div>
      <div className="mt-10 mx-10 h-fit p-7 bg-brand-700 border-4 rounded-3xl">
        <h1 className={`${merienda.className} text-brand-200 text-lg md:text-2xl lg:text-3xl`}>
          SCHOOL'S MISSIONS
        </h1>
        <ol className="mt-4 text-md md:text-lg lg:text-xl">
          <SchoolMissions />
        </ol>
      </div>
    </>
  );
}
