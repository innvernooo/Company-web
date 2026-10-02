'use client';

import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Kalam, Merienda } from 'next/font/google';
import Image from 'next/image';

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

export default function SignInPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const handleSignIn = async ({ email, password }: any) => {
    try {
      const res = await axios.post(
        'https://api.backendless.com/51BDC217-6F0F-4668-8A87-71B5CFFCD59A/EC698C6A-021C-4A86-8DAD-32A425C360DD/users/login',
        { login: email, password },
      );
      console.log(res);
      reset();
      toast.success('Selamat datang di website kami');
      router.push('/');
    } catch (error: unknown) {
      toast.error('Email atau password salah, silahkan coba lagi');
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-brand-700">
        <form onSubmit={handleSubmit(handleSignIn)}>
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
            Sign In Form
          </h1>
          <p className={`mb-3 flex justify-center text-xl ${kalam.className}`}>
            Enter your details to continue
          </p>
          <fieldset className="fieldset bg-[#8ACFF8] border-base-300 rounded-box w-xs border p-4 ">
            <label className="label text-black font-semibold">Email</label>
            <input
              type="email"
              className="input bg-white"
              placeholder="Email"
              {...register('email')}
            />

            <label className="label text-black font-semibold">Password</label>
            <input
              type="password"
              className="input bg-white"
              placeholder="Password"
              {...register('password')}
            />

            <p>
              Don't have an account?{' '}
              <a
                className="text-red-600 font-semibold underline"
                href="/sign-up"
              >
                Sign Up
              </a>
            </p>
            <button className="btn btn-success mt-4">Sign In</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
