'use client';

import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { useSignInStore } from '@/stores/useSignInStore';

export default function SignInPage() {
  const router = useRouter();
  const { setSignIn } = useSignInStore();

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
      console.log(res.data);
      setSignIn(
        res.data.username,
        res.data.email,
        res.data['user-token'],
        res.data.objectId,
      );

      reset();
      toast.success('Selamat datang di website kami');
      router.push('/');
    } catch (error: unknown) {
      toast.error('Email atau password salah, silahkan coba lagi');
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-brand-300-soft">
        <form onSubmit={handleSubmit(handleSignIn)}>
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
            Sign In Form
          </h1>
          <p className={`mb-3 flex justify-center text-xl font-display font-medium text-brand-400`}>
            Enter your details to continue
          </p>
          <fieldset className="fieldset bg-white border-brand-200/15 shadow-lg rounded-box w-xs border p-4 ">
            <label className="label text-ink font-semibold">Email</label>
            <input
              type="email"
              className="input bg-white text-ink border-brand-200/20"
              placeholder="Email"
              {...register('email')}
            />

            <label className="label text-ink font-semibold">Password</label>
            <input
              type="password"
              className="input bg-white text-ink border-brand-200/20"
              placeholder="Password"
              {...register('password')}
            />

            <p className="text-ink-muted">
              Don't have an account?{' '}
              <a
                className="text-brand-400 font-semibold underline"
                href="/sign-up"
              >
                Sign Up
              </a>
            </p>
            <button className="btn border-none bg-brand-200 text-white hover:bg-brand-200-deep mt-4">Sign In</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
