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
          <li>
            <a href="team">School Team</a>
          </li>
          <li>Blogs</li>
        </ul>
      </div>
      <h1
        id="team"
        className={`mt-10 flex justify-center ${merienda.className} text-2xl md:text-3xl text-brand-100`}
      >
        INSIGHTS AND STORIES
      </h1>
      <p
        className={`flex justify-center mt-2 ${kalam.className} text-xl md:text-2xl text-brand-200`}
      >
        Experiences, ideas, and knowledge.
      </p>
      <div className="mt-10 flex justify-center items-center gap-2 text-xl text-black font-semibold">
        <MdOutlineSwipe />
        <h2>Swipe to Discover</h2>
      </div>
      <div className="carousel w-full rounded-box">
        {blog?.map((item) => (
          <div className="carousel-item">
            <div className="relative h-100 w-80 mt-13 mx-10 text-lg p-3 bg-brand-700 border-3 rounded-2xl">
              <p>
                Penulis: <b className="font-semibold">{item?.name}</b>
              </p>
              <p>
                Dipublikasikan pada:{' '}
                <b className="font-semibold">13 Januari 2026</b>
              </p>
              <h1 className={`mt-6 text-2xl ${kalam.className} text-brand-200`}>
                {item?.title}
              </h1>
              <p className="mt-2 line-clamp-4">{item?.blog}</p>
              <button className="absolute right-3 bottom-3 btn btn-soft btn-sm btn-success mt-8 rounded-lg">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
}
