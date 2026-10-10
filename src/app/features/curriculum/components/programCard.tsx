import Image from 'next/image';
import { Merienda } from 'next/font/google';
import { CiStar } from 'react-icons/ci';

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

interface ProgramCardRequest {
  imageUrl: string;
  title: string;
  age: string;
}
export default function ProgramCard({
  imageUrl,
  title,
  age,
}: ProgramCardRequest) {
  return (
    <>
      <div className="p-4 h-fit bg-[#D4F6FF] rounded-2xl">
        <Image
          src={imageUrl}
          alt="Kelas KB"
          width={400}
          height={100}
          className="rounded-2xl w-full"
        />
        <h1 className={`mt-3 ${merienda.className} text-brand-100 text-xl md:text-3xl`}>
          {title}
        </h1>
        <h2 className="mt-1 text-lg md:text-2xl font-semibold text-black">{age}</h2>
        <div className="text-yellow-900 mt-5 flex justify-end text-lg md:text-2xl">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
      </div>
    </>
  );
}
