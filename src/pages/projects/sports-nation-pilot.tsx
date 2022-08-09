import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import { Background } from '../../background/Background';
import CarouselSports from '../../carousels/CarouselSports';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { Footer } from '../../template/Footer';
import { Navbar } from '../../template/Navbar';
import { AppConfig } from '../../utils/AppConfig';

type ISportsProps = {
  locale: string;
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['projectSports'])),
    },
  };
}

const Index = (props: ISportsProps) => {
  const { t } = useTranslation('projectSports');
  return (
    <div className="antialiased text-gray-700">
      <Meta title="Sports Nation - Pilot" description={AppConfig.description} />
      <Navbar prefix="../../" />
      <Background color="pt-20 ">
        <Section
          id="chitilaProject"
          title="Sports Nation - Pilot"
          titleColor={true}
        >
          <div className="text-center text-gray-900">
            <Link href="" locale="ro">
              <a>
                <input
                  type="button"
                  value="ro"
                  className={`mr-4 border-2 rounded-md h-8 w-8 ${
                    props.locale === 'ro'
                      ? 'bg-primary-500 border-white'
                      : 'border-primary-500'
                  } cursor-pointer`}
                ></input>
              </a>
            </Link>
            <Link href="" locale="en">
              <a>
                <input
                  type="button"
                  value="en"
                  className={`border-2 h-8 rounded-md w-8 ${
                    props.locale === 'en'
                      ? 'bg-primary-500 border-white'
                      : 'border-primary-500'
                  } cursor-pointer`}
                ></input>
              </a>
            </Link>
          </div>

          <div className="mt-12 text-lg lg:text-xl indent-10 text-gray-900">
            <div className="md:grid md:grid-cols-2 md:gap-12 mb-8">
              <div className="mb-6 mt-12">{t('paragraph1')}</div>
              <img
                src="/assets/images/sports1.png"
                alt="image sports1"
                className="m-auto w-full sm:w-4/5 md:w-full"
              ></img>
            </div>

            <div className="mb-6 font-bold text-2xl">{t('head1')}</div>
            <div className="mb-6">{t('paragraph2')}</div>
            <div className="mb-6">{t('paragraph3')}</div>
            <div className="mb-6">{t('paragraph4')}</div>
            <div className="mb-6">{t('paragraph5')}</div>
            <div className="mb-6">{t('paragraph6')}</div>
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
