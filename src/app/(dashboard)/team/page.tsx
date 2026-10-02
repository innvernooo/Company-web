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
      <div className="breadcrumbs text-xs md:text-sm">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about-us">About Us</a>
          </li>
          <li>
            <a href="curriculum">Programs</a>
          </li>
          <li>School Team</li>
        </ul>
      </div>
      <h1
        id="team"
        className={`mt-10 flex justify-center ${merienda.className} text-2xl md:text-3xl text-brand-100`}
      >
        MEET OUR SCHOOL TEAM
      </h1>
      <p
        className={`flex justify-center mt-2 ${kalam.className} text-xl md:text-2xl text-brand-200`}
      >
        Leaders & Teachers
      </p>
      <div className="mt-10 flex w-full justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <StaffCard
            imageSrc="/images/bunda-erna.jpg"
            icon={BsPersonCheck}
            title="KETUA YAYASAN"
            name="Miss Erna Widyasari, S. Kom."
            almamater="Universitas Dian Nuswantoro"
            jurusan="Manajemen Informatika"
          />
          <StaffCard
            imageSrc="/images/miss-anita.jpg"
            icon={BsPersonCheck}
            title="KEPALA SEKOLAH"
            name="Miss Anita Jhuliani"
            almamater="Institut Ilmu Agama Shalahuddin Al Ayyubi"
            jurusan="Pendidikan Agama Islam"
          />
        </div>
      </div>
      <div className="mt-20 flex w-full justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <StaffCard
            imageSrc="/images/miss-anita.jpg"
            icon={IoPersonCircleSharp}
            title="GURU KB"
            name="Miss Anita Jhuliani"
            almamater="Institut Ilmu Agama Shalahuddin Al Ayyubi"
            jurusan="Pendidikan Agama Islam"
          />
          <StaffCard
            imageSrc="/images/miss-fitri.jpg"
            icon={IoPersonCircleSharp}
            title="GURU TK-A"
            name="Miss Fitri Fidia Alawiah"
            almamater="Universitas Terbuka"
            jurusan="Hukum Ilmu Sosial dan Politik"
          />
          <StaffCard
            imageSrc="/images/miss-fitha.jpg"
            icon={IoPersonCircleSharp}
            title="GURU TK-B"
            name="Miss Anggraeni Nurfita L."
            almamater="Institut Ilmu Agama Shalahuddin Al Ayyubi"
            jurusan="Pendidikan Agama Islam"
          />
        </div>
      </div>
    </>
  );
}
