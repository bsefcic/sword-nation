import { ReactNode } from 'react';

type IProjectsProps = {
  projectTitle: string;
  projectPath: string;
  children: ReactNode;
  projectDescrption: string;
  projectImage: string;
};

const Project = (props: IProjectsProps) => (
  <div className="max-w-lg mx-auto">
    <div className="bg-white shadow-xl border border-gray-200 rounded-md max-w-sm mb-5">
      <a href={props.projectPath}>
        <img className="rounded-t-lg" src={props.projectImage} alt=""></img>
      </a>
      <div className="p-5">
        <a href={props.projectPath}>
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {props.projectTitle}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3">
          {props.projectDescrption}
        </p>
        <a
          className="text-white bg-primary-500 hover:bg-primary-600 hover:scale-90 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href={props.projectPath}
        >
          Citește mai multe
        </a>
      </div>
    </div>
  </div>
);

export { Project };
