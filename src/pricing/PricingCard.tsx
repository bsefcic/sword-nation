import { ReactNode } from 'react';

type IPricingCardProps = {
  name: string;
  description: string;
  price: string;
  periodicity: string;
  button: ReactNode;
  children: ReactNode;
};

const PricingCard = (props: IPricingCardProps) => (
  <div className="p-8 flex flex-col border-2 border-gray-200 rounded-md bg-white">
    <div className="text-lg font-medium text-gray-700">{props.name}</div>

    <div className="mt-3">{props.description}</div>

    <div className="mt-5">
      <span className="text-gray-900 text-3xl font-bold">{props.price}</span>
      <span className="ml-1">{`/ ${props.periodicity}`}</span>
    </div>

    <div className="mt-5">{props.button}</div>

    <ul className="mt-10 pt-8 border-t border-gray-200">{props.children}</ul>
  </div>
);

export { PricingCard };
