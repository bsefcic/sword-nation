import { ReactNode } from 'react';

import className from 'classnames';

type ISectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  yPadding?: string;
  dark?: boolean;
  children: ReactNode;
  titleColor?: boolean;
};

const Section = (props: ISectionProps) => {
  const titleClass = className({
    'text-gray-900': !props.titleColor,
    'text-primary-500': props.titleColor,
    'font-bold': true,
    'text-4xl': true,
  });

  return (
    <div
      id={props.id}
      className={`max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6 scroll-mt-24 ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
    >
      {(props.title || props.subtitle || props.description) && (
        <div className="mb-6 text-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto">
          {props.subtitle && (
            <div className="text-white text-sm font-bold italic">
              {props.subtitle}
            </div>
          )}
          {props.title && <h2 className={titleClass}>{props.title}</h2>}
          {props.description && (
            <div className="mt-4 lg:text-xl text-gray-900">
              {props.description}
            </div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
};

export { Section };
