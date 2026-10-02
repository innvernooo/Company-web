'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Kalam, Merienda } from 'next/font/google';
import Image from 'next/image';
import {
  signUpRequest,
  signUpSchema,
} from '@/app/features/sign-up/validation/signUpSchema';

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signUpRequest>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSignUp = async (data: signUpRequest) => {
    try {
      const res = await axios.post(
        'https://api.backendless.com/51BDC217-6F0F-4668-8A87-71B5CFFCD59A/EC698C6A-021C-4A86-8DAD-32A425C360DD/users/register',
        data,
      );
      reset();
      toast.success(
        'Pembuatan akun berhasil. Segera kembali ke halaman Sign In',
      );
    } catch (error: unknown) {
      toast.error('Pembuatan akun tidak berhasil, akun sudah terdaftar');
    }
  };
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-brand-700">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Image
            src="/tk-it-logo.svg"
            alt="Siswa TK IT Arisya Al-Karim"
            width={100}
            height={100}
            className="w-full h-40 mb-4 flex justify-center"
          />
          <h1
            className={`text-3xl ${merienda.className} mb-1 text-brand-100 flex justify-center`}
          >
            Sign Up Form
          </h1>
          <p className={`mb-3 flex justify-center text-xl ${kalam.className}`}>
            Create an account to get started
          </p>
          <fieldset className="fieldset bg-[#8ACFF8] border-base-300 rounded-box w-xs border p-4 ">
            <label className="label text-black font-semibold">Email</label>
            <input
              type="email"
              className="input bg-white"
              placeholder="Email"
              {...register('email')}
            />
            <p className="label text-red-600">{errors?.email?.message}</p>
            <label className="label text-black font-semibold">Username</label>
            <input
              type="text"
              className="input bg-white"
              placeholder="Username"
              {...register('username')}
            />
            <p className="label text-red-600">{errors?.username?.message}</p>
            <label className="label text-black font-semibold">Password</label>
            <input
              type="password"
              className="input bg-white"
              placeholder="Password"
              {...register('password')}
            />
            <p className="label text-red-600">{errors?.password?.message}</p>
            <p>
              Already have an account?{' '}
              <a
                className="text-red-600 font-semibold underline"
                href="/sign-in"
              >
                Sign In
              </a>
            </p>
            <button className="btn btn-success mt-4">Submit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
