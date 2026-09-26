import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default function Homepage() {
  return (
    <>
      <div className={`breadcrumbs text-sm text-black ${geistSans.className}`}>
  <ul>
    <li>Home</li>
  </ul>
</div>
<h1 className='mt-3 flex justify-center text-4xl text-black font-bold'>Welcome to Our Company Website</h1>
    </>
  );
}
