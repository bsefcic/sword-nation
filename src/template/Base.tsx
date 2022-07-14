import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { Projects } from './Projects';
import { SupportUs } from './SupportUs';
import { Team } from './Team';

const Base = () => (
  <div className="antialiased text-gray-700">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    <Team />
    <Projects />
    <SupportUs />
    <Footer />
  </div>
);

export { Base };
