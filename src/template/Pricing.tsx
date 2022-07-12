import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingFeature } from '../pricing/PricingFeature';

const Pricing = () => (
  <Background color="bg-gray-100">
    <Section title="Flexible Plans" subtitle="Pricing">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 gap-x-5">
        <PricingCard
          name="FREE"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$0"
          periodicity="mo"
          button={
            <Link href="/">
              <a>
                <Button full xs>
                  Get Started
                </Button>
              </a>
            </Link>
          }
        >
          <PricingFeature>1 Team Members</PricingFeature>
          <PricingFeature>1 Website</PricingFeature>
          <PricingFeature>1 GB Storage</PricingFeature>
          <PricingFeature>1 TB Transfer</PricingFeature>
          <PricingFeature>Email Support</PricingFeature>
        </PricingCard>
        <PricingCard
          name="PREMIUM"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$19"
          periodicity="mo"
          button={
            <Link href="/">
              <a>
                <Button full xs>
                  Get Started
                </Button>
              </a>
            </Link>
          }
        >
          <PricingFeature>5 Team Members</PricingFeature>
          <PricingFeature>5 Website</PricingFeature>
          <PricingFeature>5 GB Storage</PricingFeature>
          <PricingFeature>5 TB Transfer</PricingFeature>
          <PricingFeature>Email Support</PricingFeature>
        </PricingCard>
        <PricingCard
          name="STARTUP"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$99"
          periodicity="mo"
          button={
            <Link href="/">
              <a>
                <Button full xs>
                  Get Started
                </Button>
              </a>
            </Link>
          }
        >
          <PricingFeature>30 Team Members</PricingFeature>
          <PricingFeature>30 Website</PricingFeature>
          <PricingFeature>30 GB Storage</PricingFeature>
          <PricingFeature>30 TB Transfer</PricingFeature>
          <PricingFeature>Email Support</PricingFeature>
        </PricingCard>
        <PricingCard
          name="ENTERPRISE"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$199"
          periodicity="mo"
          button={
            <Link href="/">
              <a>
                <Button full xs>
                  Get Started
                </Button>
              </a>
            </Link>
          }
        >
          <PricingFeature>100 Team Members</PricingFeature>
          <PricingFeature>100 Website</PricingFeature>
          <PricingFeature>100 GB Storage</PricingFeature>
          <PricingFeature>100 TB Transfer</PricingFeature>
          <PricingFeature>Email Support</PricingFeature>
        </PricingCard>
      </div>
    </Section>
  </Background>
);

export { Pricing };
