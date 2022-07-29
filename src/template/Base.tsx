import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Home } from './Home';
import { Mission } from './Mission';
import { Navbar } from './Navbar';
import { Projects } from './Projects';
import { SupportUs } from './SupportUs';
import { TeamCards } from './TeamCards';

const Base = () => (
  <div className="antialiased text-gray-700">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar prefix="" />
    <Home />
    <Mission />
    <TeamCards />
    <Projects />
    <SupportUs />
    <Footer />
  </div>
);

export { Base };
