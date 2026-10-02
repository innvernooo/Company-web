import type { IconType } from 'react-icons';

interface staffcardRequest {
  imageSrc: string;
  icon: IconType;
  title: string;
  name: string;
  almamater: string;
  jurusan: string;
}
export default function staffCard({
  imageSrc,
  icon: Icon,
  title,
  name,
  almamater,
  jurusan
}: staffcardRequest) {
  return (
    <>
      <div className="aura text-orange-600 bg-yellow-200 card w-80 shadow-sm">
        <figure className="h-fit">
          <img src={imageSrc} className='h-80 w-full object-cover object-[50%_20%]' />
        </figure>
        <div className="card-body bg-brand-700">
          <div className="flex gap-1 items-center">
            <Icon className='text-xl text-black'/>
            <h2 className="text-xl font-bold text-brand-100">{title}</h2>
          </div>
          <p className="text-xl font-semibold text-black">{name}</p>
          <p className='mt-2 text-base text-black'>{`Almamater: ${almamater}`}</p>
          <p className='text-base text-black'>{`Jurusan: ${jurusan}`}</p>
        </div>
      </div>
    </>
  );
}
