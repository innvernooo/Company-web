import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <Navbar />
      <div className='min-h-screen p-5'>{children}</div>
      <Footer />
    </>
  );
}
