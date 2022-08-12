import Link from 'next/link';

import { Background } from '../../../background/Background';
import CarouselSports from '../../../carousels/CarouselSports';
import { Meta } from '../../../layout/Meta';
import { Section } from '../../../layout/Section';
import { FacebookMsg } from '../../../template/FacebookMsg';
import { Footer } from '../../../template/Footer';
import { Navbar } from '../../../template/Navbar';
import { AppConfig } from '../../../utils/AppConfig';

const Index = () => {
  return (
    <div className="antialiased text-gray-700">
      <Meta title="Sports Nation - Pilot" description={AppConfig.description} />
      <Navbar prefix="../../" />
      <FacebookMsg />
      <Background color="pt-20 ">
        <Section
          id="chitilaProject"
          title="Sports Nation - Pilot"
          titleColor={true}
        >
          <div className="text-center text-gray-900">
            <Link href="../../projects/sports-nation-pilot">
              <a>
                <input
                  type="button"
                  value="ro"
                  className="mr-4 border-2 h-8 rounded-md w-8 border-primary-500 cursor-pointer"
                ></input>
              </a>
            </Link>
            <Link href="">
              <a>
                <input
                  type="button"
                  value="en"
                  className="border-2 rounded-md h-8 w-8 bg-primary-500 border-white cursor-pointer"
                ></input>
              </a>
            </Link>
          </div>

          <div className="mt-12 text-lg lg:text-xl indent-10 text-gray-900">
            <div className="md:grid md:grid-cols-2 md:gap-12 mb-8">
              <div className="mb-6 mt-12">
                The Sports Nation - Pilot project is an initiative coordinated
                by the Sword Nation Association, to develop a method of working
                with children from disadvantaged backgrounds, in sports. We use
                sport in an organized setting as a tool for social inclusion,
                analyze its benefits and limitations, and then lay the
                foundations for applying these working methods further. Within
                the partnership with Furim Institute (Oslo, Norway) and in
                collaboration with the Romanian Basketball Federation, the
                Romanian Rugby Federation, the Romanian Fencing Federation, and
                educational institutions from all over the country, 50 children
                from disadvantaged environments are selected and we monitor
                their progress during 12 months of practicing sports.
              </div>
              <img
                src="/assets/images/sports1.png"
                alt="image sports1"
                className="m-auto w-full sm:w-4/5 md:w-full"
              ></img>
            </div>

            <div className="mb-6 font-bold text-2xl">How do we do this?</div>
            <div className="mb-6">
              50 children with limited access to alternative education, from
              underserved backgrounds, are welcomed with open arms into the
              family of performance sports, a family without boundaries and
              without barriers.
            </div>
            <div className="mb-6">
              The 10 children&apos;s coaches, nominated by their respective
              Federations, take part in a series of workshops on the overarching
              theme &quot;Sport as a tool for social inclusion&quot;. The
              Workshops are designed and facilitated by Dr. Alina Anghel, COSR
              sports psychologist and Prof. Max Myklagard, Executive Director
              Furim Institute.
            </div>
            <div className="mb-6">
              With the support of the Romanian Basketball, Rugby and Fencing
              Federations, the 50 children have the chance to practice one of
              the three sports disciplines.
            </div>
            <div className="mb-6">
              Throughout the implementation of the project, all direct and
              indirect beneficiaries contribute to the development of Sports
              Nation&apos;s working method through constant feedback. The
              feedback forms are designed and adapted for each category of
              beneficiaries separately - children, parents, teachers and coaches
              by pedagogical experts, psychologists and sociologists.
              Psychological and sociological data are analyzed by independent
              experts and the Sword Nation team, and the results obtained form
              the basis of the Sports Nation Brochure. The brochure is a
              physical and digital material to promote the Sports Nation method
              of social inclusion through sport, applicable in any social
              context and for any sport, and is the basis for the further
              development of the method and its large-scale implementation. The
              launch of the Sports Nation Brochure is scheduled for October
              2022, in the presence of guests, partners and collaborators who
              made this project possible.
            </div>
            <div className="mb-6">
              The project is implemented by the Sword Nation Association in
              partnership with FURIM Institutt benefits from a 47.648 euros
              grant from Active Citizens Fund Romania, programme funded by
              Iceland, Liechtenstein and Norway through the EEA Grants Grants
              2014 -2021. The content of this website does not necessarily
              reflect the official position of the EEA and Norway Grants
              2014-2021; for more information visit{' '}
              <a href="https://www.eeagrants.org">www.eeagrants.org</a>. More
              details about Active Citizens Fund Romania are available at{' '}
              <a href="https://www.activecitizensfund.ro">
                www.activecitizensfund.ro
              </a>
              .
            </div>
            <div className="mb-6 mt-12 text-lg text-center">
              Active Citizens Fund - Romania
            </div>
            <div className="mb-6 text-primary-500 text-lg font-bold text-center">
              #haide #ActiveCitizensFund #Romania #activecitizens
              #EEANorwayGrants
            </div>
          </div>
        </Section>
        <CarouselSports />
      </Background>
      <Footer />
    </div>
  );
};

export default Index;
