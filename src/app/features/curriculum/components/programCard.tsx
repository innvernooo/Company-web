import Image from 'next/image';
import { CiStar } from 'react-icons/ci';

interface ProgramCardRequest {
  imageUrl: string;
  title: string;
  age: string;
  alt: string;
}
export default function ProgramCard({
  imageUrl,
  title,
  age,
  alt,
}: ProgramCardRequest) {
  return (
    <>
      <div className="p-4 h-fit bg-brand-200-soft rounded-2xl">
        <Image
          src={imageUrl}
          alt={alt}
          width={400}
          height={100}
          className="rounded-2xl w-full"
        />
        <h1 className={`mt-3 font-display font-bold text-brand-200 text-xl md:text-3xl`}>
          {title}
        </h1>
        <h2 className="mt-1 text-lg md:text-2xl font-semibold text-ink-muted">{age}</h2>
        <div className="text-brand-500 mt-5 flex justify-end text-lg md:text-2xl">
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
