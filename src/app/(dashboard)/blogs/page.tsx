'use client';

import { Kalam, Merienda } from 'next/font/google';
import useGetBlogs from '../../features/blogs/hooks/useGetBlogs';

import { MdOutlineSwipe } from 'react-icons/md';

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

export default function Blogs() {
  const { blog, getBlogs } = useGetBlogs();

  return (
    <>
      <h1
        id="team"
        className={`mt-5 flex justify-center ${merienda.className} text-2xl md:text-3xl lg:text-4xl text-brand-100`}
      >
        INSIGHTS AND STORIES
      </h1>
      <p
        className={`flex justify-center mt-2 ${kalam.className} text-xl md:text-2xl lg:text-3xl text-brand-200`}
      >
        Experiences, ideas, and knowledge.
      </p>
      <div className="mt-10 flex justify-center items-center gap-2 text-xl lg:text-2xl text-black font-semibold">
        <MdOutlineSwipe />
        <h2 className='text-black'>Swipe to Discover</h2>
      </div>
      <div className="carousel w-full rounded-box">
        {blog?.map((item, index) => {
          const modalId = `blog-modal-${item?.objectId ?? index}`;

          return (
            <div key={item?.objectId ?? index} className="carousel-item">
              <div className="relative h-100 w-80 lg:w-101 mt-13 mx-10 text-lg p-3 bg-brand-700 border-3 rounded-2xl">
                <p className='text-black'>
                  Penulis: <b className="font-semibold text-black">{item?.name}</b>
                </p>
                <p className='text-black'>
                  Dipublikasikan pada:{' '}
                  <b className="font-semibold text-black">{item?.publishedDate}</b>
                </p>
                <h1
                  className={`mt-6 text-2xl ${kalam.className} text-brand-200`}
                >
                  {item?.title}
                </h1>
                <p className="mt-2 line-clamp-4 text-black">{item?.blog}</p>
                <button
                  className="btn absolute right-3 bottom-3 btn-soft btn-sm btn-success mt-8 rounded-lg"
                  popoverTarget={modalId}
                >
                  Baca Selengkapnya
                </button>
                <div className="modal" id={modalId} popover="auto">
                  <div className="modal-box bg-white max-w-2xl h-130 md:h-fit">
                    <p className="text-sm text-gray-500">
                      Penulis:{' '}
                      <b className="text-black text-sm md:text-lg">
                        {item?.name}
                      </b>{' '}
                      &middot; {item?.publishedDate}
                    </p>
                    <h3
                      className={`mt-2 text-2xl ${kalam.className} text-brand-200 text-xl md:text-2xl`}
                    >
                      {item?.title}
                    </h3>
                    <p className="py-4 whitespace-pre-line text-black text-sm md:text-base">
                      {item?.blog}
                    </p>
                  </div>
                  <div className="modal-backdrop">
                    <button popoverTarget={modalId} popoverTargetAction="hide">
                      close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
