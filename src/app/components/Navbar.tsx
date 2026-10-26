'use client';

import Image from 'next/image';
import { useSignInStore } from '@/stores/useSignInStore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { TiThMenu } from 'react-icons/ti';

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
    <div className="navbar bg-white/90 backdrop-blur-md border-b border-brand-200/10 px-4 shadow-sm sticky top-0 z-50">
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
            className={`ml-1 md:ml-2 text-[15px] md:text-2xl tracking-wide text-brand-200 font-semibold font-display`}
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
              className="drawer-button btn w-12 h-8 border-none shadow-none bg-brand-300-soft hover:bg-brand-300"
            >
              <TiThMenu className="text-brand-200 text-sm" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-5"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu min-h-full w-50 md:w-60 lg:w-70 p-4 bg-surface text-ink text-lg">
              <h1
                className={`text-sm md:text-lg lg:text-2xl font-semibold mb-4 mt-3 font-display text-brand-200`}
              >
                Explore more about TK IT ARISYA
              </h1>
              <li>
                <a href="/" className="text-sm md:text-base lg:text-lg hover:bg-brand-200-soft hover:text-brand-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-sm md:text-base lg:text-lg hover:bg-brand-200-soft hover:text-brand-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/programs" className="text-sm md:text-base lg:text-lg hover:bg-brand-200-soft hover:text-brand-200">
                  Programs
                </a>
              </li>
              <li>
                <a href="/team" className="text-sm md:text-base lg:text-lg hover:bg-brand-200-soft hover:text-brand-200">
                  School Team
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-sm md:text-base lg:text-lg hover:bg-brand-200-soft hover:text-brand-200">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/create-blog"
                  className="text-sm md:text-base lg:text-lg hover:bg-brand-200-soft hover:text-brand-200"
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
