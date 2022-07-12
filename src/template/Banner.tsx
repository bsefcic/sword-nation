import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Background color="bg-primary-500">
    <Section
      title="Start your Free Trial"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda voluptatem."
      dark
    >
      <div className="text-center">
        <Link href="/">
          <a>
            <Button dark>Get Started</Button>
          </a>
        </Link>
      </div>
    </Section>
  </Background>
);

export { Banner };
