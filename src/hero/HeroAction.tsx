import { ReactNode } from 'react';

type IHeroActionProps = {
  title: ReactNode;
  description1: ReactNode;
  description2: string;
  description3: string;
  description4: string;
};

const HeroAction = (props: IHeroActionProps) => (
  <header className="hero-action flex flex-wrap items-center lg:text-left">
    <div className="w-full md:w-4/5 md:mx-auto mb-6 lg:w-1/2 text-center lg:pr-4">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
    </div>
    <div className="text-2xl mt-8 mb-6 indent-10">{props.description1}</div>
    <div className="text-2xl mb-6 indent-10">{props.description2}</div>
    <div className="text-2xl mb-6 indent-10">{props.description3}</div>
    <div className="text-2xl mb-6 indent-10">{props.description4}</div>

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
