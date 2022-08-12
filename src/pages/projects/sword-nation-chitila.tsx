import { Background } from '../../background/Background';
import CarouselChitila from '../../carousels/CarouselChitila';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { FacebookMsg } from '../../template/FacebookMsg';
import { Footer } from '../../template/Footer';
import { Navbar } from '../../template/Navbar';
import { AppConfig } from '../../utils/AppConfig';

const Index = () => (
  <div className="antialiased text-gray-700">
    <Meta title="Sword Nation - Chitila" description={AppConfig.description} />
    <Navbar prefix="../../" />
    <FacebookMsg />
    <Background color="pt-20 ">
      <Section
        id="chitilaProject"
        title="Sword Nation - Chitila"
        titleColor={true}
      >
        <div className="mt-12 text-lg lg:text-xl indent-10 text-gray-900">
          <div className="md:grid md:grid-cols-2 md:gap-12 mb-8">
            <div>
              <div>
                Din 2020, un grup de 30 de copii cu vârste între 7 și 12 ani,
                din comunitatea orașului Chitila, jud. Ilfov, sunt implicați
                într-un proces de educație non-formală prin practicarea scrimei.
                Ei își descoperă propriile atuuri prin intermediul acestui sport
                nobil și se antrenează pentru a se autodepăși în fiecare zi.
              </div>
              <div className="mt-6">
                Ce am reușit împreună cu comunitatea din Chitila:
              </div>
              <dl className="indent-16 mb-6">
                <li>
                  <span className="text-primary-500 font-bold">
                    1 sport nou
                  </span>{' '}
                  în oraș
                </li>
                <li>
                  <span className="text-primary-500 font-bold">
                    30 de copii
                  </span>{' '}
                  se autodepășesc în fiecare zi, la sport și la școală
                </li>
                <li>
                  participare la{' '}
                  <span className="text-primary-500 font-bold">2 ediții</span>{' '}
                  ale Campionatului Național de Scrimă
                </li>
                <li>
                  <span className="text-primary-500 font-bold">3 medalii</span>{' '}
                  la Campionatului Național de Scrimă
                </li>
                <li>
                  <span className="text-primary-500 font-bold">prezență</span>{' '}
                  de peste{' '}
                  <span className="text-primary-500 font-bold">90%</span> la
                  antrenamente
                </li>
                <li>să organizăm o competiție de scrimă</li>
                <li>
                  să participăm la{' '}
                  <span className="text-primary-500 font-bold">
                    2 cantonamente
                  </span>
                  , competiții amicale, piese de teatru, workshop-uri de
                  dezvoltare personală sau masterclass-uri
                </li>
              </dl>
            </div>
            <img
              src="/assets/images/chitilahome.png"
              alt="image chitila"
              className="m-auto w-full sm:w-4/5 md:w-full"
            ></img>
          </div>

          <div className="mb-6">
            Proiectul a fost finanțat în primă fază prin programul În Stare de
            Bine susținut de Kaufland România și implementat de Fundația pentru
            Dezvoltarea Societății Civile, bucurându-se de colaborarea și
            deschiderea întregii comunități din Chitila, a Primăriei, a Clubului
            Sportiv și a Școlii “Ion Olteanu”. Astfel, în cadrul proiectului, am
            creat un ecosistem perfect de dezvoltare a copiilor care practică
            sport, monitorizând îndeaproape dezvoltarea permanentă a relației
            copil – familie – școală – sport.
          </div>
          <div className="mb-6">
            Asociația Sword Nation are ca obiectiv facilitarea incluziunii
            sociale a tinerilor provenienți din medii defavorizate, iar
            activitatea și viziunea noastră pornește de la promovarea sportului
            organizat, ca vector al incluziunii sociale și al egalității de
            șanse. Prin facilitarea accesului la scrimă pentru cât mai multe
            comunități cu copii aflați în situație de risc de excluziune socială
            sau abandon școlar, ne propunem să apropiem de valorile acestui
            sport nobil copiii care au cea mai mare nevoie.
          </div>
          <div className="mb-6">
            Succesul de până acum al proiectului nu ar fi fost posibil fără
            susținerea partenerilor noștri: Primăria Chitila, Clubul Sportiv
            Chitila, programul În Stare de Bine susținut de Kaufland România,
            Federația Română de Scrimă, Fundația pentru Dezvoltarea Societății
            Civile, Școala Primară “Ion Olteanu”, Zoopie Concept.
          </div>
        </div>
      </Section>
    </Background>
    <CarouselChitila />
    <Footer />
  </div>
);

export default Index;
