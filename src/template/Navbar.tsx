import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  <Background color="bg-white fixed w-full z-50">
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
  </Background>
);

export { Navbar };
