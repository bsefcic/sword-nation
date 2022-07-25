import React from 'react';

import { Section } from '../layout/Section';
import { TeamCard } from '../teamcard/TeamCard';

const TeamCards = () => {
  return (
    <div className="pb-8 bg-primary-500">
      <Section
        id="team"
        title="Echipa noastră"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        tristique nibh ac diam pretium tincidunt. Vestibulum sed est velit."
        yPadding="pt-20"
      >
        <TeamCard
          name="Mihai Cucu-Dumitrescu"
          position="Cofondator, Președinte"
          description="Mihai este cofondator și președinte al Asociației Sword Nation din
        2018, de când organizația a început să se dezvolte treptat. Cu un
        background în sociologie și științe politice, mihai are experiență
        de lucru în project management, programe și seminarii de leadership,
        due diligence, management sportiv, antrenorat și arbitraj - în
        mediul privat, public și ong. Mihai are o licență în științe
        politice de la universitatea din Padova (2017) și un master în
        terorism și violență politică de la universitatea din Birmingham
        (2018). Cariera sa sportivă constă în aproximativ 13 ani în care a
        practicat scrimă în România, Italia și Marea Britanie și a
        participat în calitate de sportiv la campionate naționale, etape de
        cupă mondială și campionate europene. Din 2021, Mihai deține licența
        B de arbitru al Federației Internaționale de Scrimă și oficiază la
        competiții în toată lumea. În timpul liber, îi face mare plăcere să
        antreneze una din grupele de sportivi ai asociației, să alerge, să
        cânte la chitarele sale, să scrie poezie și să petreacă timp cu
        familia și prietenii cei mai apropiați."
          image={{
            src: '/assets/images/avatar.png',
            alt: 'Random name avatar alt text',
          }}
        />
        <TeamCard
          name="Cătălin-Andrei Dumitru"
          position="Cofondator, Antrenor"
          description="Fost sportiv de performanță în ramura sabie din scrima Românesca,
        legitimat la clubul sportiv al armatei Steaua, component în loturile
        naționale de juniori și tineret, și-a început activitatea sportivă
        la vârstă de 10 ani alături de antrenorul Adrian Cârlescu Badea.
        Cariera sportivă a durat 13 ani cu participări multiple la
        campionate europene(cadeți-juniori), etape de cupă mondială și
        concursuri naționale și internaționale. Palmaresul a fost unul vast
        cu multiple medalii de aur, argint și bronz, atât pe plan intern cât
        și extern. La acest moment în cadrul Asociației Sword Nation, deține
        funcția de Cofondator și Antrenor Principal pe secția sportivă
        scrimă. Obiectivul acestuia este de a menține grupul constant și
        împreună să ne putem dezvolta atât pe plan personal cât și pe plan
        sportiv. Fiecare sportiv are ceva unic și datoria noastră este să ne
        dăm seama care sunt acestea și ulterior să le dezvoltăm prin metode
        și tehnici eficiente."
          image={{
            src: '/assets/images/catalindumitrupoza2.png',
            alt: 'Random name avatar alt text',
          }}
        />
        <TeamCard
          name="Andrei Matei"
          position="Ofițer de Proiect"
          description="Cu un background în rugby-ul de performanță, Andrei și-a început
        parcursul de leader de la o vârstă fragedă, fiind vice-căpitanul
        unei echipe de rugby cu aspirații la câștigarea campionatului
        național, an de an. Absolvent al Academiei de Studii Economice
        București, acesta și-a dedicat parcusul profesional formării
        tinerilor în industria de esports (gaming profesionist). prin
        activitatea sa la Team Singularity, acesta a modelat parcursul
        profesional a tinerilor cu vârste cuprinse între 16 – 20 de ani. În
        prezent Ofițer de Proiect în cadrul Sword Nation, acesta își propune
        să adapteze și să modernizeze cultura sportului românesc către o
        deschidere mai mare față de necesitatea sociala de practicare a
        sportului."
          image={{
            src: '/assets/images/andreimateipoza.png',
            alt: 'Random name avatar alt text',
          }}
        />
        <TeamCard
          name="Ruxandra Groapă"
          position="Manager Social Media"
          description="Se ocupă de social-media pentru paginile Sword Nation. Ajută la
        formarea identității vizuale a organizației, prin materiale online
        cât și offline. 23 de ani, licențiată în publicitate, urmând în
        prezent un master de social-media și marketing online. Consideră că
        societatea ar trebui să fie mai implicată în cauzele umanitare, în
        special cele pentru educația copiilor din medii defavorizate, ceea
        ce i-a determinat interesul pentru domeniul de activitate al
        ong-urilor."
          image={{
            src: '/assets/images/avatar.png',
            alt: 'Random name avatar alt text',
          }}
        />
        <TeamCard
          name="Vlad Darabonț"
          position="Lorem ipsum?"
          description="Vlad este un fizioterapeut tenace, fiind extrem de interesat de
        problemele de „hardware” și „software” ale oamenilor, și antrenor
        entuziast de baschet ce dorește să trezească, în cei pe care îi
        antrenează, pasiunea pentru sport. Pentru vlad, totul a început cu o
        oră de antrenament, apoi învățarea jocului de baschet s-a întins pe
        mai bine de un deceniu din viața sa. Dragostea față de acest sport
        l-a condus spre frumoasa atribuție de antrenor de baschet, având
        misiunea nu numai de a înrădăcina cultura sportului, ci și de a
        forma oameni, de a clădi caractere. Tot sportul a reprezentat un
        puternic factor decizional pentru modul în care vlad servește
        societatea. Acesta a ales să se preocupe de durerile și neajunsurile
        fizice ale oamenilor, iar, pe de altă parte, caută să integreze
        prevenția și să maximizeze performanțele sportivilor. Gândul că ar
        putea să ofere și să ajute l-a determinat să se alăture echipei
        Sword Nation, având privilegiul și datoria de a deschide noi porți,
        de a crea noi oportunițăți, de a îmbunătăți practica și metodica
        sportului românesc și de a reprezenta o ancoră pentru cei din
        breaslă și nu numai."
          image={{
            src: '/assets/images/avatar.png',
            alt: 'Random name avatar alt text',
          }}
        />
      </Section>
    </div>
  );
};

export { TeamCards };
