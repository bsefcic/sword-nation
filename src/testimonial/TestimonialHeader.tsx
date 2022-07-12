import { ReactNode } from 'react';

type ITestimonialHeaderProps = {
  title: string;
  subtitle: string;
  action: ReactNode;
  children: ReactNode;
};

const TestimonialHeader = (props: ITestimonialHeaderProps) => (
  <div>
    <div className="text-primary-500 text-sm font-bold">{props.subtitle}</div>
    <h3 className="mt-1 text-3xl text-gray-900 font-semibold">{props.title}</h3>
    <div className="mt-3 text-lg leading-7">{props.children}</div>
    <div className="mt-4">{props.action}</div>
  </div>
);

export { TestimonialHeader };
