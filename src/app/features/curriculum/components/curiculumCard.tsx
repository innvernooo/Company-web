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
        <Icon className='mb-5 text-3xl md:text-4xl flex w-full justify-center' />
        <div className="aura aura-rainbow duration-3000 p-1 h-fit">
          <h2 className="p-2 flex justify-center bg-white rounded-lg w-full text-md md:text-xl font-semibold">
            {text}
          </h2>
        </div>
      </div>
    </>
  );
}
