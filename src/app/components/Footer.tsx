import Image from 'next/image';
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="mt-15 footer sm:footer-horizontal bg-brand-300 text-neutral-content p-10">
        <aside>
          <Image
            src="/images/logo-tk-siluet.svg"
            alt="Siluet TK IT ARISYA"
            width={60}
            height={100}
          />
          <p className='text-white'>
            TK ISLAM TERPADU ARISYA AL-KARIM.
            <br />
            Under The Auspices of Arisya Foundation
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href='https://wa.link/j7cj8z' target="_blank" rel="noopener noreferrer">
              <RiWhatsappFill className='text-3xl text-white' />
            </a>
            <a href='https://www.instagram.com/tkitarisya?mdxt=OHpkdGc1Zm94Zm1p' target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className='text-3xl text-white' />
            </a>
            <a href='https://youtube.com/@arisya.foundation?si=PPHpvXJQuIna_tSQ' target="_blank" rel="noopener noreferrer">
              <FaYoutube className='text-3xl text-white' />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}