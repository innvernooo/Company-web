import { IconType } from 'react-icons';

interface curiculumCardRequest {
  text: string;
  icon: IconType;
}

export default function CuriculumCard({
  text,
  icon: Icon,
}: curiculumCardRequest) {


  return (
    <>
      <div className='grid grid-cols-1'>
        <Icon className='mb-5 text-3xl md:text-4xl lg:text-5xl flex w-full justify-center' />
        <div className="p-1 h-fit">
          <h2 className="p-2 flex justify-center bg-white border-2 border-brand-300/60 rounded-2xl w-full text-ink text-md md:text-xl lg:text-2xl font-semibold">
            {text}
          </h2>
        </div>
      </div>
    </>
  );
}
