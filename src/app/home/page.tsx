import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default function Homepage() {
  return (
    <>
      <h1 className={`p-4 text-black ${geistSans.className}`}>Hello world</h1>
    </>
  );
}
