import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { FacebookMsg } from './FacebookMsg';
import { Footer } from './Footer';
import { Home } from './Home';
import { Mission } from './Mission';
import { Navbar } from './Navbar';
import { Projects } from './Projects';
import { SupportUs } from './SupportUs';
import { TeamCards } from './TeamCards';

type IBaseType = {
  locale: string;
};

const Base = (props: IBaseType) => (
  <div className="antialiased text-gray-700">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar prefix="" />
    <FacebookMsg />
    <Home />
    <Mission />
    <TeamCards />
    <Projects locale={props.locale} />
    <SupportUs />
    <Footer />
  </div>
);

export { Base };
