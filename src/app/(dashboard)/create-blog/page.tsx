'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Kalam, Merienda } from 'next/font/google';
import {
  blogRequest,
  blogSchema,
} from '../../features/create-blog/validation/createBlogSchema';

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

export default function CreateBlogs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<blogRequest>({
    resolver: zodResolver(blogSchema),
  });

  const handleCreateBlog = async (data: blogRequest) => {
    try {
      const res = await axios.post(
        'https://api.backendless.com/51BDC217-6F0F-4668-8A87-71B5CFFCD59A/EC698C6A-021C-4A86-8DAD-32A425C360DD/data/school-blogs',
        data,
      );
      reset();
      toast.success('Blog berhasil terkirim');
    } catch (error: unknown) {
      toast.error('Blog tidak berhasil terkirim');
    }
  };
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
          <li>
            <a href="blogs">Blogs</a>
          </li>
          <li>Create a Blog</li>
        </ul>
      </div>
      <h1
        id="team"
        className={`mt-10 flex justify-center ${merienda.className} text-2xl md:text-3xl text-brand-100`}
      >
        CREATE YOUR OWN BLOG
      </h1>
      <p
        className={`flex justify-center mt-2 ${kalam.className} text-xl md:text-2xl text-brand-200`}
      >
        Share Your Thoughts with the World
      </p>
      <div className="flex justify-center items-center mt-10">
        <div className="h-fit w-200 bg-brand-700 rounded-2xl shadow-lg">
          <form
            onSubmit={handleSubmit(handleCreateBlog)}
            className="flex flex-col gap-4 p-4"
          >
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-brand-200 text-lg">
                Your Name
              </legend>
              <input
                type="text"
                className="input bg-white w-full"
                placeholder="Type here..."
                {...register('name')}
              />
              <p className="label text-red-600">{errors?.name?.message}</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-brand-200 text-lg">
                Your Blog Title
              </legend>
              <input
                type="text"
                className="input bg-white w-full"
                placeholder="Type here..."
                {...register('title')}
              />
              <p className="label text-red-600">{errors?.title?.message}</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-brand-200 text-lg">
                Write Your Blog
              </legend>
              <textarea
                className="textarea h-50 w-full bg-white"
                placeholder="Type here..."
                {...register('blog')}
              ></textarea>
              <div className="label text-red-600">{errors?.blog?.message}</div>
            </fieldset>
            <button
              type="submit"
              className="bg-brand-100 font-semibold text-white rounded-md p-2 hover:bg-brand-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
