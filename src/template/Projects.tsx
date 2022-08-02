import { Section } from '../layout/Section';
import { Project } from '../project/Project';

const Projects = () => (
  <Section
    id="projects"
    title="Ce facem?"
    description="Proiectele dezvoltate de Asociația Sword Nation au scopul de a oferi copiilor din medii defavorizate oportunitatea de a practică sportul în cluburile afiliate."
  >
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6">
      <Project
        projectPath="/projects/sword-nation-chitila"
        projectTitle="Proiectul Sword Nation - Chitila"
        projectImage="/assets/images/chitila1.png"
        projectDescrption="Din 2020, un grup de 30 de copii cu vârste între 7 și 12 an, din
        comunitatea din Chitila, sunt implicați într-un proces de educație
        non-formală prin practicarea scrimei..."
      >
        <></>
      </Project>
      <Project
        projectPath="/projects/sports-nation-pilot"
        projectTitle="Proiectul Sports Nation - Pilot"
        projectImage="/assets/images/sports1.png"
        projectDescrption="Proiectul Sports Nation - Pilot este o inițiativă coordonată de
        Asociația Sword Nation, de dezvoltare a unei metode de lucru cu
        copii din medii defavorizate, în sport..."
      >
        <></>
      </Project>
    </div>
  </Section>
);

export { Projects };
