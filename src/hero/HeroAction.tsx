import { ReactNode } from 'react';

type IHeroActionProps = {
  title: ReactNode;
  description: string;
  action: ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  list: ReactNode;
};

const HeroAction = (props: IHeroActionProps) => (
  <header className="hero-action flex flex-wrap items-center text-center lg:text-left">
    <div className="w-full md:w-4/5 md:mx-auto lg:w-1/2 lg:pr-4">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <div className="text-2xl mt-4 mb-6">{props.description}</div>

      {props.action}

      <ul className="mt-4 flex flex-col sm:flex-row justify-center">
        {props.list}
      </ul>
    </div>

    {props.image && (
      <div className="w-full lg:w-1/2">
        <img
          className="mt-12 lg:mt-0 mx-auto rounded-md"
          src={props.image.src}
          alt={props.image.alt}
        />
      </div>
    )}

    <style jsx>
      {`
        .hero-action :global(li) {
          @apply mt-2;
        }

        @screen sm {
          .hero-action :global(li) {
            @apply mx-2 mt-0;
          }
        }
      `}
    </style>
  </header>
);

export { HeroAction };
