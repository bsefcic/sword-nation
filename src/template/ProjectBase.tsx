import { ReactNode } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

type IProjectBaseProps = {
  project: ReactNode;
  projectTitle: string;
};

const ProjectBase = (props: IProjectBaseProps) => (
  <div className="antialiased text-gray-700">
    <Meta title={props.projectTitle} description={AppConfig.description} />
    <Navbar prefix="../../" />
    {props.project}
    <Footer />
  </div>
);

export { ProjectBase };
