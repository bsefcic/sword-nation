import Link from 'next/link';

import { Section } from '../layout/Section';
import { Project } from '../project/Project';

const Projects = () => (
  <Section
    id="projects"
    title="Proiectele noastre"
    subtitle="Lorem Ipsum"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="flex flex-col">
      <Project
        projectPath="/projects/sword-nation-chitila"
        projectTitle="Proiectul Sword Nation - Chitila"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet faucibus enim. Duis scelerisque, nibh in ultrices consequat,
          velit nisl tincidunt ante, sit amet fermentum mi lacus in massa.
          Maecenas nec nulla vel nisi vestibulum egestas. Nunc nibh magna,
          placerat sit amet rutrum sit amet, facilisis vitae nisl.
        </p>
        <p>
          Fusce sed nunc ultrices, sollicitudin dui eu, laoreet lacus. Nullam
          mollis nisi ac turpis maximus, posuere viverra lectus tristique.
          Checkout{' '}
          <Link href="/">
            <a>this example</a>
          </Link>
          .
        </p>
      </Project>
      <Project projectTitle="Proiectul Sports Nation - Pilot">
        <p>
          Sports nation – pilot a fost proiectat cu obiectivul de a uni prin
          sport trei discipline și federații sportive românești, Federația
          Română de Rugby, Federația Română de Scrimă și Federația Româna de
          Baschet în cadrul unui ansamblu axat pe dezvoltarea awareness-ului
          asupra bunelor practici în lucrul cu copiii din medii defavorizate.
          Durata de implementare a proiectului este de 12 luni, persoanele
          implicate fiind 10 antrenori din cele 3 discipline sportive și 50 de
          copii, legitimați la cluburile sportive.
        </p>
        <p>
          Cei 50 de copii au fost selectati din institutiile de invatamant
          locale si participa la antrenamente in cadrul cluburilor sportive. pe
          parcursul implementarii proiectului, copiii au primit echipamentul
          necesar practicarii sportului.
        </p>
        <p>
          Cei 10 antrenori selectați cu ajutorul federațiilor de specialitate au
          participat la 2 workshopuri dedicate pe teme precum psihologia
          sportului, importanța socială a sportului, construirea sustenabila a
          inițiativelor sociale etc.
        </p>
        <p>
          Cu ajutorul Alinei Anghel am demarat primul workshop; temele
          principale au fost psihologia sportivă, metode de incluziune socială
          prin sport și modele pedagogice adaptate pentru incluziune socială. Am
          abordat și subiecte precum nevoile comunităților defavorizate și rolul
          esențial al antrenorului/ei în ele.
        </p>
        <p>
          Cel de-al doilea workshop dedicat antrenorilor a fost organizat
          împreună cu partenerii proiectului Furim Insitutt prin Max Myklagard.
          Workshopul s-a desfășurat online, pe zoom, tema principală fiind
          crearea unui ecosistem inclusiv în cadrul cluburilor sportive cu
          exemple din Norvegia.
        </p>
        <div className="flex items-center justify-center mt-4">
          <img
            src="/assets/images/sportsnationpic.png"
            alt="sports nation pic"
            width="500px"
          ></img>
        </div>
      </Project>
    </div>
  </Section>
);

export { Projects };
