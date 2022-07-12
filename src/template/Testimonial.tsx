import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { TestimonialCard } from '../testimonial/TestimonialCard';
import { TestimonialHeader } from '../testimonial/TestimonialHeader';

const Testimonial = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <TestimonialHeader
          subtitle="Awesome customers"
          title="Testimonials"
          action={
            <Link href="/">
              <a>
                <Button xl>Read case studies</Button>
              </a>
            </Link>
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          tristique nibh ac diam pretium tincidunt. Vestibulum sed est velit.
        </TestimonialHeader>

        <div>
          <TestimonialCard
            image={{
              src: '/assets/images/avatar.png',
              alt: 'Random name avatar alt text',
            }}
            author={{
              name: 'Jennifer Ford',
              position: 'CEO of Something',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            malesuada nisi tellus.
          </TestimonialCard>
          <TestimonialCard
            image={{
              src: '/assets/images/avatar2.png',
              alt: 'Random name avatar alt text',
            }}
            author={{
              name: 'Jennifer Ford',
              position: 'CEO of Something',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            malesuada nisi tellus.
          </TestimonialCard>
          <TestimonialCard
            image={{
              src: '/assets/images/avatar3.png',
              alt: 'Random name avatar alt text',
            }}
            author={{
              name: 'Jennifer Ford',
              position: 'CEO of Something',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            malesuada nisi tellus.
          </TestimonialCard>
        </div>
      </div>
    </Section>
  </Background>
);

export { Testimonial };
