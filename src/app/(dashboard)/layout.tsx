import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UserStatus from '../components/UserStatus';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <Navbar />
      <div className='px-5 pt-5'>
      <UserStatus />
      </div>
      <div className='min-h-screen p-5'>{children}</div>
      <Footer />
    </>
  );
}
