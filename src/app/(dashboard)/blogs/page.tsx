'use client';

import useGetBlogs from '../../features/blogs/hooks/useGetBlogs';

import { MdOutlineSwipe } from 'react-icons/md';

export default function Blogs() {
  const { blog, getBlogs } = useGetBlogs();

  return (
    <>
      <h1
        id="team"
        className={`mt-5 flex justify-center font-display font-bold text-2xl md:text-3xl lg:text-4xl text-brand-200`}
      >
        INSIGHTS AND STORIES
      </h1>
      <p
        className={`flex justify-center mt-2 font-display font-medium text-xl md:text-2xl lg:text-3xl text-brand-400`}
      >
        Experiences, ideas, and knowledge.
      </p>
      <div className="mt-10 flex justify-center items-center gap-2 text-xl lg:text-2xl text-ink-muted font-semibold">
        <MdOutlineSwipe className="text-brand-400" />
        <h2 className='text-ink-muted'>Swipe to Discover</h2>
      </div>
      <div className="carousel w-full rounded-box">
        {blog?.map((item, index) => {
          const modalId = `blog-modal-${item?.objectId ?? index}`;

          return (
            <div key={item?.objectId ?? index} className="carousel-item">
              <div className="relative h-100 w-80 lg:w-101 mt-13 mx-10 text-lg p-3 bg-brand-300-soft border-2 border-brand-300/50 rounded-2xl shadow-sm">
                <p className='text-ink-muted'>
                  Penulis: <b className="font-semibold text-ink">{item?.name}</b>
                </p>
                <p className='text-ink-muted'>
                  Dipublikasikan pada:{' '}
                  <b className="font-semibold text-ink">{item?.publishedDate}</b>
                </p>
                <h1
                  className={`mt-6 text-2xl font-display font-medium text-brand-200`}
                >
                  {item?.title}
                </h1>
                <p className="mt-2 line-clamp-4 text-ink">{item?.blog}</p>
                <button
                  className="btn absolute right-3 bottom-3 btn-sm border-none bg-brand-200 text-white hover:bg-brand-200-deep mt-8 rounded-full"
                  popoverTarget={modalId}
                >
                  Baca Selengkapnya
                </button>
                <div className="modal" id={modalId} popover="auto">
                  <div className="modal-box bg-white max-w-2xl h-130 md:h-fit">
                    <p className="text-sm text-ink-muted">
                      Penulis:{' '}
                      <b className="text-ink text-sm md:text-lg">
                        {item?.name}
                      </b>{' '}
                      &middot; {item?.publishedDate}
                    </p>
                    <h3
                      className={`mt-2 text-2xl font-display font-medium text-brand-200 text-xl md:text-2xl`}
                    >
                      {item?.title}
                    </h3>
                    <p className="py-4 whitespace-pre-line text-ink text-sm md:text-base">
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
