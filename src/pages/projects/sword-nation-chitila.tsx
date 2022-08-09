import { Background } from '../../background/Background';
import CarouselChitila from '../../carousels/CarouselChitila';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { Footer } from '../../template/Footer';
import { Navbar } from '../../template/Navbar';
import { AppConfig } from '../../utils/AppConfig';

const Index = () => (
  <div className="antialiased text-gray-700">
    <Meta title="Sword Nation - Chitila" description={AppConfig.description} />
    <Navbar prefix="../../" />
    <Background color="pt-20 ">
      <Section
        id="chitilaProject"
        title="Sword Nation - Chitila"
        titleColor={true}
      >
        <div className="mt-12 text-lg lg:text-xl indent-10 text-gray-900">
          <div>
            Din 2020, un grup de 30 de copii cu vârste între 7 și 12 ani, din
            comunitatea orașului Chitila, jud. Ilfov, sunt implicați într-un
            proces de educație non-formală prin practicarea scrimei. Ei își
            descoperă propriile atuuri în acest sport nobil și se antrenează
            pentru a se autodepăși în fiecare zi.
          </div>
          <div className="mt-6">
            Ce am reușit împreună cu comunitatea din Chitila:
          </div>
          <dl className="indent-16 mb-6">
            <li>1 sport nou în oraș</li>
            <li>
              30 de copii se autodepășesc în fiecare zi, la sport și la școală
            </li>
            <li>
              participare la 2 ediții ale Campionatului Național de Scrimă
            </li>
            <li>3 medalii la Campionatului Național de Scrimă</li>
            <li>prezență de peste 90% la antrenamente</li>
            <li>să organizăm o competiție de scrimă</li>
            <li>
              să participăm la 2 cantonamente, competiții amicale, piese de
              teatru, workshop-uri de dezvoltare personală sau masterclass-uri
            </li>
          </dl>
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
            organizat ca vector al incluziunii sociale și al egalității de
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
