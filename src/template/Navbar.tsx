import { useState, useEffect } from 'react';

import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type INavbarProps = {
  prefix: string;
};

const Navbar = (props: INavbarProps) => {
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
        <NavbarTwoColumns prefix={props.prefix} logo={<Logo xl />}>
          <li>
            <Link href={`${props.prefix}#misiune`}>
              <a>Misiune</a>
            </Link>
          </li>
          <li>
            <Link href={`${props.prefix}#team`}>
              <a>Echipă</a>
            </Link>
          </li>
          <li>
            <Link href={`${props.prefix}#projects`}>
              <a>Proiecte</a>
            </Link>
          </li>
          <li>
            <Link href={`${props.prefix}#support`}>
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
