import { CustomerLogo } from '../customer/CustomerLogo';
import { Section } from '../layout/Section';

const Customer = () => (
  <Section
    title="Trusted by over 8000+ customers"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="grid grid-cols-2 sm:grid-cols-4 justify-center">
      <CustomerLogo src="/assets/images/logo.png" alt="Random company logo" />
      <CustomerLogo src="/assets/images/logo2.png" alt="Random company logo" />
      <CustomerLogo src="/assets/images/logo3.png" alt="Random company logo" />
      <CustomerLogo src="/assets/images/logo.png" alt="Random company logo" />
      <CustomerLogo src="/assets/images/logo2.png" alt="Random company logo" />
      <CustomerLogo src="/assets/images/logo3.png" alt="Random company logo" />
      <CustomerLogo src="/assets/images/logo.png" alt="Random company logo" />
      <CustomerLogo src="/assets/images/logo2.png" alt="Random company logo" />
    </div>
  </Section>
);

export { Customer };
