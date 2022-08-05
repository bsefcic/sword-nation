import { Background } from '../background/Background';
import { HeroAction } from '../hero/HeroAction';
import { Section } from '../layout/Section';

const Mission = () => (
  <Background color="bg-white">
    <Section id="misiune" yPadding="py-24">
      <HeroAction
        title={<>Misiune</>}
        description1={
          <>
            <span className="text-primary-500 font-bold ">Sword Nation</span>{' '}
            este o organizație nonprofit, independentă, înființată în 2018, care
            contribuie la incluziunea socială a copiilor din medii defavorizate,
            prin facilitarea accesului la sport în regim organizat.
          </>
        }
        description2="Copiii care practică sport prin intermediul proiectelor noastre iau parte la un proces de educație alternativă, menit să îi transforme în viitori adulți mai implicați, mai încrezători și mai echilibrați."
        description3="Simțim zi de zi puterea sportului de a educa și de a modela copiii. Așa că misiunea noastră este de a oferi fiecărui copil care provine dintr-un mediu defavorizat oportunitatea practicării unei activități, prin care să își atingă adevăratul potențial și să își exprime propria pasiune. Copiii aflați în situații dificile au cea mai mare nevoie de experiența autodepășirii și de creșterea încrederii în sine. Societatea pentru care muncim este una mai echilibrată, mai sănătoasă și mai productivă!"
        description4="Prin prietenie și respect reciproc putem excela împreună!"
      />
    </Section>
  </Background>
);

export { Mission };
