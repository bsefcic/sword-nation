import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns
        logo={<Logo xl />}
        rightMenu={
          <>
            <li>
              <Link href="/">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Button>Start Free Trial</Button>
                </a>
              </Link>
            </li>
          </>
        }
      >
        <li>
          <Link href="/">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Navbar };
