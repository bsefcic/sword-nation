import { Background } from '../background/Background';
import { HeroAction } from '../hero/HeroAction';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100 pt-12">
    <Section id="misiune" yPadding="py-24">
      <HeroAction
        title={
          <>
            Bine ai venit pe pagina oficiala{' '}
            <span className="text-primary-500">Sword Nation!</span>
          </>
        }
        description1="Asociația sword nation a fost înființată în 2018, iar de atunci dezvoltă și implementează proiecte de incluziune socială prin sport, menite să apropie acei copii care au cea mai mare nevoie de valorile și lecțiile pe care sportul se bazează."
        description2="Credința noastră profundă este că sportul are puterea de a educa și de a modela. prin asigurarea accesului cât mai răspândit la valori precum meritocrația, fair-play-ul, echilibrul sau respectul față de sine și de adversar, societatea în care trăim devine un spațiu mai cald, mai eficient și mai inclusiv."
        description3="Misiunea noastră este de a oferi fiecărui copil care provine dintr-un mediu defavorizat oportunitatea practicării unei activități care să îi permită să să se descopere pe sine și să își atingă adevăratul potențial."
      />
    </Section>
  </Background>
);

export { Hero };
