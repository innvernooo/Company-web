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
      <div className="bg-white border border-brand-300/50 card w-80 shadow-md overflow-hidden">
        <figure className="h-fit">
          <img src={imageSrc} className='h-80 w-full object-cover object-[50%_20%]' />
        </figure>
        <div className="card-body bg-brand-300-soft">
          <div className="flex gap-1 items-center">
            <Icon className='text-xl text-brand-400'/>
            <h2 className="text-xl font-bold text-brand-400">{title}</h2>
          </div>
          <p className="text-xl font-semibold text-brand-200">{name}</p>
          <p className='mt-2 text-base text-ink-muted'>{`Almamater: ${almamater}`}</p>
          <p className='text-base text-ink-muted'>{`Jurusan: ${jurusan}`}</p>
        </div>
      </div>
    </>
  );
}
