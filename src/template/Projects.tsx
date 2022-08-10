import { Section } from '../layout/Section';
import { Project } from '../project/Project';

type IProjectType = {
  locale: string;
};

const Projects = (props: IProjectType) => (
  <Section id="projects" title="Ce facem?">
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6">
      <Project
        projectPath={`/${props.locale}/projects/sword-nation-chitila`}
        projectTitle="Proiectul Sword Nation - Chitila"
        projectImage="/assets/images/chitilahome.png"
        projectDescrption="Din 2020, un grup de 30 de copii cu vârste între 7 și 12 ani, din comunitatea orașului Chitila, jud. Ilfov, sunt implicați într-un proces de educație non-formală prin practicarea scrimei..."
      >
        <></>
      </Project>
      <Project
        projectPath={`/${props.locale}/projects/sports-nation-pilot`}
        projectTitle="Proiectul Sports Nation - Pilot"
        projectImage="/assets/images/sports1.png"
        projectDescrption="Proiectul Sports Nation - Pilot este o inițiativă coordonată de Asociația Sword Nation, ce are în vedere dezvoltarea unei metode de lucru cu copii din medii defavorizate, prin sport..."
      >
        <></>
      </Project>
    </div>
  </Section>
);

export { Projects };
