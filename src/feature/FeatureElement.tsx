import { ReactNode } from 'react';

type IFeatureElementProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

const FeatureElement = (props: IFeatureElementProps) => (
  <div className="feature-element flex p-3 rounded-md bg-white">
    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-400 flex-shrink-0">
      {props.icon}
    </div>

    <div className="ml-3">
      <div className="text-lg text-gray-700 font-semibold">{props.title}</div>

      <div className="mt-1 text-base leading-7">{props.children}</div>
    </div>

    <style jsx>
      {`
        .feature-element :global(svg) {
          @apply text-white stroke-current w-6 h-6 stroke-2;
        }
      `}
    </style>
  </div>
);

export { FeatureElement };
