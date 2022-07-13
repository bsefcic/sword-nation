import Link from 'next/link';

import { Section } from '../layout/Section';
import { Project } from '../project/Project';

const Projects = () => (
  <Section
    id="projects"
    title="Proiectele noastre"
    subtitle="FAQ"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="flex flex-col">
      <Project projectTitle="proiectul sword nation - chitila">
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
      <Project projectTitle="proiectul sports nation - pilot">
        <p>
          sports nation – pilot a fost proiectat cu obiectivul de a uni prin
          sport trei discipline si federatii sportive romanesti, federatia
          romana de rugby, federatia romana de scrima si federatia romana de
          baschet in cadrul unui ansamblu axat pe dezvoltarea awareness-ului
          asupra bunelor practici in lucrul cu copiii din medii defavorizate.
          durata de implementare a proiectului este de 12 luni, persoanele
          implicate fiind 10 antrenori din cele 3 discipline sportive si 50 de
          copii, legitimati la cluburile sportive.
        </p>
        <p>
          cei 50 de copii au fost selectati din institutiile de invatamant
          locale si participa la antrenamente in cadrul cluburilor sportive. pe
          parcursul implementarii proiectului, copiii au primit echipamentul
          necesar practicarii sportului.
        </p>
        <p>
          cei 10 antrenori selectati cu ajutorul federatiilor de specialitate au
          participat la 2 workshop-uri dedicate pe teme precum psihologia
          sportului, importanta sociala a sportului, construirea sustenabila a
          initiativelor sociale etc.
        </p>
        <p>
          cu ajutorul alinei anghel am demarat primul workshop; temele
          principale au fost psihologia sportivă, metode de incluziune socială
          prin sport și modele pedagogice adaptate pentru incluziune socială. am
          abordat și subiecte precum nevoile comunităților defavorizate și rolul
          esențial al antrenorului/ei în ele.
        </p>
        <p>
          cel de-al doilea workshop dedicat antrenorilor a fost organizat
          impreuna cu partenerii proiectului furim insitutt prin max myklagard.
          workshop-ul s-a desfasurat online, pe zoom tema principala fiind
          crearea unui ecosistem inclusiv in cadrul cluburilor sportive cu
          exemple din norvegia.
        </p>
        <div className="flex items-center justify-center">
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
