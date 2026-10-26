'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

import {
  blogRequest,
  blogSchema,
} from '../../features/create-blog/validation/createBlogSchema';
import { useSignInStore } from '@/stores/useSignInStore';

export default function CreateBlogs() {
  const { username, token } = useSignInStore();
  const isLoggedIn = !!token;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<blogRequest>({
    resolver: zodResolver(blogSchema),
  });

  const handleCreateBlog = async (data: blogRequest) => {
    if (!isLoggedIn) {
      toast.error('Silakan login terlebih dahulu untuk membuat blog');
      return;
    }

    try {
      const res = await axios.post(
        'https://api.backendless.com/51BDC217-6F0F-4668-8A87-71B5CFFCD59A/EC698C6A-021C-4A86-8DAD-32A425C360DD/data/school-blogs',
        data,
        {
          headers: {
            'user-token': token,
          },
        },
      );
      reset();
      toast.success('Blog berhasil terkirim');
    } catch (error: unknown) {
      toast.error('Blog tidak berhasil terkirim');
    }
  };

  return (
    <>
      <h1
        id="team"
        className={`mt-5 flex justify-center font-display font-bold text-2xl md:text-3xl lg:text-4xl text-brand-200`}
      >
        CREATE YOUR OWN BLOG
      </h1>
      <p
        className={`flex justify-center mt-2 font-display font-medium text-xl md:text-2xl lg:text-3xl text-brand-400`}
      >
        Share Your Thoughts with the World
      </p>
      <div className="flex justify-center items-center mt-3">
        <div className="h-fit w-200 bg-brand-200-soft border border-brand-200/15 rounded-2xl shadow-lg">
          {isLoggedIn ? (
            <form
              onSubmit={handleSubmit(handleCreateBlog)}
              className="flex flex-col gap-4 p-4"
            >
              <p className="text-sm text-ink-muted">
                Login sebagai <b className="text-brand-200">{username}</b>
              </p>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-brand-200 text-lg">
                  Your Name
                </legend>
                <input
                  type="text"
                  className="input bg-white text-ink border-brand-200/20 w-full"
                  placeholder="Type here..."
                  {...register('name')}
                />
                <p className="label text-brand-100">{errors?.name?.message}</p>
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-brand-200 text-lg">
                  Date Published
                </legend>
                <input
                  type="date"
                  className="input bg-white text-ink border-brand-200/20 w-full"
                  {...register('publishedDate')}
                />
                <p className="label text-brand-100">
                  {errors?.publishedDate?.message}
                </p>
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-brand-200 text-lg">
                  Your Blog Title
                </legend>
                <input
                  type="text"
                  className="input bg-white text-ink border-brand-200/20 w-full"
                  placeholder="Type here..."
                  {...register('title')}
                />
                <p className="label text-brand-100">{errors?.title?.message}</p>
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-brand-200 text-lg">
                  Write Your Blog
                </legend>
                <textarea
                  className="textarea h-50 w-full bg-white text-ink border-brand-200/20"
                  placeholder="Type here..."
                  {...register('blog')}
                ></textarea>
                <div className="label text-brand-100">
                  {errors?.blog?.message}
                </div>
              </fieldset>
              <button
                type="submit"
                className="bg-brand-400 hover:bg-brand-100 font-semibold text-white rounded-full transition p-2 cursor-pointer"
              >
                Submit
              </button>
              <p className="text-xs md:text-lg mt-10 text-ink-muted italic">
                Your blog will be immediately displayed on the Blogs Page
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-3 p-8 text-center">
              <p className="text-lg font-semibold text-brand-200">
                Kamu harus sign in dulu untuk menulis blog
              </p>
              <p className="text-sm text-ink-muted">
                Silakan masuk ke akunmu, atau daftar dulu kalau belum punya
                akun.
              </p>
              <div className="mt-2 flex gap-3">
                <Link
                  href="/sign-in"
                  className="btn border-none bg-brand-200 text-white hover:bg-brand-200-deep"
                >
                  Sign In
                </Link>
                <Link href="/sign-up" className="btn border-none bg-brand-300 text-ink hover:bg-brand-500">
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
