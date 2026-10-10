'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useSignInStore } from '@/stores/useSignInStore';

export default function UserStatus() {
  const router = useRouter();
  const { username, token, logout } = useSignInStore();
  const isLoggedIn = !!token;

  const handleLogout = () => {
    logout();
    toast.success('Berhasil log out');
    router.push('/');
  };

  return (
    <div className="flex justify-between items-center text-xs md:text-sm lg:text-base text-black">
      <div>
        {isLoggedIn ? (
          <>
          <div className='flex items-center gap-2'>
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img
                  alt="Photo profile"
                  src="./PP.jpg"
                />
              </div>
            </div>
            {username} | <b>Member</b>
            </div>
          </>
        ) : (
          <>
            Guest | <b>Not Signed in</b>
          </>
        )}
      </div>

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 p-1.5 font-semibold text-white hover:underline rounded-sm"
        >
          Sign Out
        </button>
      ) : (
        <Link
          href="/sign-in"
          className="bg-green-500 p-1.5 font-semibold text-white hover:underline rounded-sm"
        >
          Sign In
        </Link>
      )}
    </div>
  );
}
