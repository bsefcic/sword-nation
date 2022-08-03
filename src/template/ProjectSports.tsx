import { Background } from '../background/Background';
import CarouselSports from '../carousels/CarouselSports';
import { Section } from '../layout/Section';

const ProjectSports = () => (
  <>
    <Background color="pt-20 ">
      <Section
        id="chitilaProject"
        title="Sports Nation - Pilot"
        titleColor={true}
      >
        <div className="mt-12 text-lg lg:text-xl indent-10 text-gray-900">
          <div className="md:grid md:grid-cols-2 md:gap-12 mb-8">
            <div className="mb-6 mt-12">
              Proiectul Sports Nation - Pilot este o inițiativă coordonată de
              Asociația Sword Nation, de dezvoltare a unei metode de lucru cu
              copii din medii defavorizate, în sport. Folosim sportul în cadru
              organizat ca instrument de incluziune socială, îi analizăm
              beneficiile și limitările, iar apoi punem bazele aplicării acestei
              metode de lucru în continuare. În cadrul parteneriatului cu Furim
              Institute (Oslo, Norvegia) și în colaborare cu Federația Română de
              Baschet, Federația Română de Rugby, Federația Română de Scrimă și
              instituții de învățământ din toată țara selectăm 50 de copii din
              medii defavorizate și le monitorizăm evoluția de-a lungul a 12
              luni de practicare a sportului în regim susținut.
            </div>
            <img
              src="/assets/images/sports1.png"
              alt="image sports1"
              className="m-auto w-full sm:w-4/5 md:w-full"
            ></img>
          </div>

          <div className="mb-6 font-bold text-2xl">Cum facem asta?</div>
          <div className="mb-6">
            50 de copii cu acces limitat la educație alternativă, din medii
            insuficient deservite, sunt primiți cu brațele deschise în familia
            sportului de performanță, o familie fără granițe și fără bariere.
          </div>
          <div className="mb-6">
            Cei 10 antrenori ai copiilor, selectați de către Federațiile de
            specialitate, iau parte la o serie de workshop-uri pe tema
            &quot;Sportul ca instrument de incluziune socială&quot; concepute și
            facilitate de dr. Alina Anghel, psiholog sportiv COSR și prof. Max
            Myklagard, Director Executiv Furim Institute.
          </div>
          <div className="mb-6">
            Cu sprijinul Federațiilor Române de Baschet, Rugby și Scrimă, cei 50
            de copii au șansa de a practica una din cele trei discipline
            sportive.
          </div>
          <div className="mb-6">
            De-a lungul implementării proiectului, toți beneficiarii direcți și
            indirecți contribuie la dezvoltarea metodei de lucru Sports Nation,
            prin feedback constant. Formularele de feedback sunt concepute și
            adaptate pentru fiecare categorie de beneficiari în parte - copii,
            părinți, profesori și antrenori de experți pedagogi, psihologi și
            sociologi. Datele cu caracter psihologic și sociologic sunt
            analizate de experți independenți și de echipa Sword Nation, iar
            rezultatele obținute stau la baza Broșurii Sports Nation. Broșura
            reprezintă un material fizic și digital de promovare a metodei
            Sports Nation de incluziune socială prin sport, aplicabil în orice
            context social și pentru orice sport și stă la baza dezvoltării
            ulterioare a metodei și implementării ei la scară largă. Lansarea{' '}
            <span className="text-primary-100">Broșurii Sports Nation</span>{' '}
            este programată pentru luna octombrie 2022, în prezența invitaților,
            partenerilor și colaboratorilor care au făcut posibil acest proiect.
          </div>
          <div className="mb-6">
            Proiectul este derulat de Asociația Sword Nation în parteneriat cu
            FURIM Institutt și beneficiază de o finanțare în valoare de 47.648
            euro, prin programul Active Citizens Fund România, finanțat de
            Islanda, Liechtenstein și Norvegia prin Granturile SEE 2014-2021.
            Conținutul acestui website nu reprezintă în mod necesar poziția
            oficială a Granturilor SEE și Norvegiene 2014-2021; pentru mai multe
            informații accesați www.eeagrants.org. Informații despre Active
            Citizens Fund România sunt disponibile la www.activecitizensfund.ro.
          </div>
          <div className="mb-6 mt-12 text-lg text-center">
            Active Citizens Fund - Romania
          </div>
          <div className="mb-6 text-primary-500 text-lg font-bold text-center">
            #haide #ActiveCitizensFund #Romania #activecitizens #EEANorwayGrants
          </div>
        </div>
      </Section>
      <CarouselSports />
    </Background>
  </>
);

export { ProjectSports };
