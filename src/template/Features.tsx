import { Background } from '../background/Background';
import { FeatureElement } from '../feature/FeatureElement';
import { Section } from '../layout/Section';

const Features = () => (
  <Background color="bg-primary-100">
    <Section
      title="Your title here"
      subtitle="Features"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
      yPadding="py-36"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FeatureElement
          title="Your title"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M21 12h-4l-3 8-4-16-3 8H3" />
            </svg>
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at.
        </FeatureElement>
        <FeatureElement
          title="Your title"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M12 12v.01M19.071 4.929a4 10 45 00-9.9 4.243 4 10 45 00-4.242 9.9 4 10 45 009.9-4.244 4 10 45 004.242-9.9" />
              <path d="M4.929 4.929a10 4 45 004.243 9.9 10 4 45 009.9 4.242 10 4 45 00-4.244-9.9 10 4 45 00-9.9-4.242" />
            </svg>
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at.
        </FeatureElement>
        <FeatureElement
          title="Your title"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M14 7h7v7" />
            </svg>
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at.
        </FeatureElement>
        <FeatureElement
          title="Your title"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M13 3v7h6l-8 11v-7H5l8-11" />
            </svg>
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at.
        </FeatureElement>
      </div>
    </Section>
  </Background>
);

export { Features };
