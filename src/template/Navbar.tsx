import { useState, useEffect } from 'react';

import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-colors ${
        offset > 80 ? 'navbg ' : ''
      }`}
    >
      <Section id="nav" yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="#misiune">
              <a>Misiune</a>
            </Link>
          </li>
          <li>
            <Link href="#team">
              <a>Echipă</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a>Proiecte</a>
            </Link>
          </li>
          <li>
            <Link href="#support">
              <a>Susținere</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
      <style jsx>
        {`
          .navbg {
            @apply bg-white;
          }
        `}
      </style>
    </div>
  );
};

export { Navbar };
