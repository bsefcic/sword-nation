import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NumberText } from '../stats/NumberText';

const Stats = () => (
  <Background color="bg-gray-900">
    <Section
      title="Over 8000+ projects completed"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
      dark
    >
      <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        <NumberText text="Revenue">$500k+</NumberText>
        <NumberText text="Products">10+</NumberText>
        <NumberText text="Components">150+</NumberText>
        <NumberText text="Employees">10+</NumberText>
      </div>
    </Section>
  </Background>
);

export { Stats };
