'use client';

import { Merienda, Kalam } from 'next/font/google';
import Image from 'next/image';
import { useSignInStore } from '@/stores/useSignInStore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { Gelasio } from 'next/font/google';
import { TiThMenu } from 'react-icons/ti';

const gelasio = Gelasio({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
});

const merienda = Merienda({
  weight: '800',
  subsets: ['latin'],
});

export default function Navbar() {
  const router = useRouter();
  const { username, token, logout } = useSignInStore();
  const isSignedIn = !!token;

  const handleLogout = () => {
    logout();
    toast.success('Berhasil log out');
    router.push('/');
  };

  return (
    <div className="navbar bg-brand-200 px-4 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-1">
          <Image
            src="/tk-it-logo-bulat.svg"
            alt="Logo TK IT"
            width={20}
            height={20}
            className="md:w-10"
          />
          <a
            className={`ml-1 md:ml-2 text-[15px] md:text-2xl tracking-wide text-white font-semibold ${gelasio.className}`}
          >
            TK IT ARISYA AL-KARIM
          </a>
        </div>
        <div className="drawer drawer-end w-fit">
          <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex items-center gap-2">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-5"
              className="drawer-button btn w-12 h-8 bg-white"
            >
              <TiThMenu className="text-black text-sm" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-5"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu min-h-full w-50 md:w-60 lg:w-70 p-4 bg-brand-700 text-black text-lg">
              <h1
                className={`text-sm md:text-lg lg:text-2xl font-semibold mb-4 mt-3 ${merienda.className} text-brand-100`}
              >
                Explore more about TK IT ARISYA
              </h1>
              <li>
                <a href="/" className="text-sm md:text-base lg:text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-sm md:text-base lg:text-lg">
                  About Us
                </a>
              </li>
              <li>
                <a href="/programs" className="text-sm md:text-base lg:text-lg">
                  Programs
                </a>
              </li>
              <li>
                <a href="/team" className="text-sm md:text-base lg:text-lg">
                  School Team
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-sm md:text-base lg:text-lg">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/create-blog"
                  className="text-sm md:text-base lg:text-lg"
                >
                  Create a Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
