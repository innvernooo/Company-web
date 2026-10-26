'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-toastify';

import Image from 'next/image';
import {
  signUpRequest,
  signUpSchema,
} from '@/app/features/sign-up/validation/signUpSchema';

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
      <div className="min-h-screen w-full flex justify-center items-center bg-brand-300-soft">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Image
            src="/tk-it-logo.svg"
            alt="Siswa TK IT Arisya Al-Karim"
            width={100}
            height={100}
            className="w-full h-40 mb-4 flex justify-center"
          />
          <h1
            className={`text-3xl font-display font-bold mb-1 text-brand-200 flex justify-center`}
          >
            Sign Up Form
          </h1>
          <p className={`mb-3 flex justify-center text-xl font-display font-medium text-brand-400`}>
            Create an account to get started
          </p>
          <fieldset className="fieldset bg-white border-brand-200/15 shadow-lg rounded-box w-xs border p-4 ">
            <label className="label text-ink font-semibold">Email</label>
            <input
              type="email"
              className="input bg-white text-ink border-brand-200/20"
              placeholder="Email"
              {...register('email')}
            />
            <p className="label text-brand-100">{errors?.email?.message}</p>
            <label className="label text-ink font-semibold">Username</label>
            <input
              type="text"
              className="input bg-white text-ink border-brand-200/20"
              placeholder="Username"
              {...register('username')}
            />
            <p className="label text-brand-100">{errors?.username?.message}</p>
            <label className="label text-ink font-semibold">Password</label>
            <input
              type="password"
              className="input bg-white text-ink border-brand-200/20"
              placeholder="Password"
              {...register('password')}
            />
            <p className="label text-brand-100">{errors?.password?.message}</p>
            <p className="text-ink-muted">
              Already have an account?{' '}
              <a
                className="text-brand-400 font-semibold underline"
                href="/sign-in"
              >
                Sign In
              </a>
            </p>
            <button className="btn border-none bg-brand-200 text-white hover:bg-brand-200-deep mt-4">Submit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
