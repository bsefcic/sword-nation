import { ReactNode } from 'react';

type IProjectsProps = {
  projectTitle: string;
  projectPath?: string;
  children: ReactNode;
};

const Project = (props: IProjectsProps) => (
  <div className="question-answer flex mt-16 first:mt-0">
    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-500 flex-shrink-0">
      <svg
        className="text-white stroke-current w-6 h-6 stroke-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 21"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path
          fill="none"
          d="M16.852,5.051h-4.018c0.131-0.225,0.211-0.482,0.211-0.761V3.528c0-0.841-0.682-1.522-1.521-1.522H8.478c-0.841,0-1.523,0.682-1.523,1.522V4.29c0,0.279,0.081,0.537,0.211,0.761H3.148c-0.841,0-1.522,0.682-1.522,1.523v9.897c0,0.842,0.682,1.523,1.522,1.523h13.704c0.842,0,1.523-0.682,1.523-1.523V6.574C18.375,5.733,17.693,5.051,16.852,5.051zM7.716,3.528c0-0.42,0.341-0.761,0.762-0.761h3.045c0.42,0,0.762,0.341,0.762,0.761V4.29c0,0.421-0.342,0.761-0.762,0.761H8.478c-0.42,0-0.762-0.34-0.762-0.761V3.528z M17.615,16.471c0,0.422-0.342,0.762-0.764,0.762H3.148c-0.42,0-0.761-0.34-0.761-0.762V9.62h15.228V16.471z M17.615,8.858H2.387V6.574c0-0.421,0.341-0.761,0.761-0.761h13.704c0.422,0,0.764,0.34,0.764,0.761V8.858z"
        ></path>
      </svg>
    </div>

    <div className="ml-4">
      <div className="text-2xl text-primary-500 font-semibold leading-7">
        {props.projectTitle}
      </div>

      <div className="text-lg leading-7 indent-8">{props.children}</div>
    </div>

    <style jsx>
      {`
        .question-answer :global(p) {
          @apply mt-4;
        }

        .question-answer :global(a) {
          @apply text-primary-500;
        }

        .question-answer :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { Project };
