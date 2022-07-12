import { ReactNode } from 'react';

type INumberTextProps = {
  text: string;
  children: ReactNode;
};

const NumberText = (props: INumberTextProps) => (
  <div className="text-center">
    <div className="text-5xl font-semibold text-primary-400">
      {props.children}
    </div>
    <div className="text-xl font-medium text-gray-300">{props.text}</div>
  </div>
);

export { NumberText };
