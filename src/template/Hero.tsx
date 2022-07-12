import { Background } from '../background/Background';
import { Form } from '../form/Form';
import { HeroAction } from '../hero/HeroAction';
import { HeroElement } from '../hero/HeroElement';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-24">
      <HeroAction
        title={
          <>
            The modern landing page for{' '}
            <span className="text-primary-500">React developer</span>
          </>
        }
        description="The easiest way to build React landing page in seconds. Save you time and focus on your product."
        action={<Form submitText="Start Free Trial" />}
        image={{
          src: '/assets/images/hero-image.png',
          alt: 'Hero screenshot',
        }}
        list={
          <>
            <HeroElement>No credit card required</HeroElement>
            <HeroElement>14-day free trial</HeroElement>
            <HeroElement>Cancel anytime</HeroElement>
          </>
        }
      />
    </Section>
  </Background>
);

export { Hero };
