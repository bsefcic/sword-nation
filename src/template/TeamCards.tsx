import React from 'react';

import { Section } from '../layout/Section';
import { TeamCard } from '../teamcard/TeamCard';

const TeamCards = () => {
  return (
    <div className="pb-8 bg-primary-500">
      <Section id="team" title="Cunoaște echipa" yPadding="pt-20">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:grid-flow-row">
          <TeamCard
            name="Mihai Cucu-Dumitrescu"
            position="Cofondator și Președinte"
            description={
              <>
                <span className="text-primary-500 font-bold">Mihai</span> are
                experientă de lucru în project management, programe de
                leadership, due diligence, management sportiv, antrenorat și
                arbitraj - în mediul privat, public și ong. A urmat studii de
                licență în Științe Politice la Università degli Studi di Padova
                și de master în Violență Politică la University of Birmingham.
                <p>
                  Ca sportiv,{' '}
                  <span className="text-primary-500 font-bold">Mihai</span> a
                  practicat timp de scrima 14 ani în Romania, Italia și Marea
                  Britanie unde a participat la multiple campionate naționale,
                  etape de cupă mondială și campionate europene, iar din 2021 el
                  este arbitru al Federației Internaționale de Scrimă și
                  oficiază la competiții în toată lumea. Din 2018, de când a
                  fondat{' '}
                  <span className="text-primary-500 font-bold">
                    Sword Nation
                  </span>
                  , e pasionat de găsirea a noi moduri de folosire a sportului
                  ca instrument de educație alternativă și rolul sportului în
                  progresul social.
                </p>
                <p>
                  În timpul liber aleargă, cântă la chitarele sale, antrenează
                  una din grupele de copii a Asociației, scrie poezie și petrece
                  timp cu familia și prietenii cei mai apropiați.
                </p>
                <p className="text-right pt-2">mihai@swordnation.ro</p>
              </>
            }
            image={{
              src: '/assets/images/mcdpoza.png',
              alt: 'Random name avatar alt text',
            }}
          />
          <TeamCard
            name="Cătălin-Andrei Dumitru"
            position="Coordonator activitate sportivă"
            description={
              <>
                <p>
                  <span className="text-primary-500 font-bold">Cătă</span> este
                  cofondator al{' '}
                  <span className="text-primary-500 font-bold">
                    Sword Nation
                  </span>{' '}
                  și coordonator al activităților sportive ale asociației.{' '}
                  <span className="text-primary-500 font-bold">Cătă</span> este
                  inginer, absolvent al Politehnicii București și fost scrimer
                  de performanță, legitimat la Clubul Sportiv al Armatei Steaua
                  și component al loturilor naționale de cadeți, juniori și
                  tineret. A început scrima alături de antrenorul Adrian
                  Cârlescu-Badea și a participat de-a lungul carierei sportive,
                  de 15 ani, la multiple Campionate Europene (cadeti-juniori),
                  etape de Cupă Mondială și concursuri naționale, câștigând
                  peste 20 de medalii la competiții naționale și internaționale.
                </p>
                <p>
                  Pornește de la credința că fiecare copil are ceva unic iar
                  datoria sa este de a-și da seama de talentul fiecăruia și de
                  a-l dezvolta prin metode și tehnici personalizate.{' '}
                  <span className="text-primary-500 font-bold">Cătă</span> e
                  bucuros să învețe ceva nou în fiecare zi de la copiii cu care
                  lucrează și să se dezvolte împreună cu grupurile Sword Nation,
                  atât pe plan personal cât și profesional sau sportiv.
                </p>
                <p className="text-right pt-2">catalin@swordnation.ro</p>
              </>
            }
            image={{
              src: '/assets/images/catalindumitrupoza.png',
              alt: 'Random name avatar alt text',
            }}
          />
          <TeamCard
            name="Andrei “Relu” Matei"
            position="Ofițer de Proiecte &amp; Strategy Champion"
            description={
              <>
                <p>
                  <span className="text-primary-500 font-bold">Andrei</span> se
                  ocupă de dezvoltarea proiectului Sports Nation - Pilot în
                  cadrul{' '}
                  <span className="text-primary-500 font-bold">
                    Sword Nation
                  </span>{' '}
                  și de identificarea a viitori potențiali parteneri. El este
                  absolvent al Academiei de Studii Economice București și își
                  dedică parcursul profesional formării tinerilor din industria
                  de e-sports, din cadrul unei echipe de gaming profesionist din
                  Copenhaga, Danemarca. Momentan,{' '}
                  <span className="text-primary-500 font-bold">Andrei</span>{' '}
                  este implicat în dezvoltarea unei platforme de comunicare
                  între diferite inițiative de e-sports din România, cu
                  obiectivul profesionalizării pieței de e-gaming de la noi din
                  țară.
                </p>
                <p>
                  Cu un background în rugby-ul de performanță,{' '}
                  <span className="text-primary-500 font-bold">Andrei</span>{' '}
                  și-a început parcursul de leader de la o vârstă fragedă, fiind
                  vice căpitanul echipei de rugby în cadrul căreia a crescut și
                  ducând echipa sa în fazele finale ale campionatului național,
                  fiind de asemenea membru al echipei naționale a României de
                  juniori.{' '}
                  <span className="text-primary-500 font-bold">Andrei</span> își
                  propune prin munca sa la{' '}
                  <span className="text-primary-500 font-bold">
                    Sword Nation
                  </span>{' '}
                  să adapteze și să modernizeze cultura sportului de masă în
                  România, către o deschidere mai mare față de rolul social pe
                  care practicarea sportului în regim susținut îl are.
                </p>
                <p className="text-right pt-2">am@swordnation.ro</p>
              </>
            }
            image={{
              src: '/assets/images/andreimateipoza.png',
              alt: 'Random name avatar alt text',
            }}
          />
          <TeamCard
            name="Ruxandra Groapă"
            position="Social Media Champion"
            description={
              <>
                <p>
                  <span className="text-primary-500 font-bold">Ruxandra</span>{' '}
                  se ocupă de social media pentru paginile{' '}
                  <span className="text-primary-500 font-bold">
                    Sword Nation
                  </span>
                  , ajută la formarea identității vizuale a organizației, prin
                  materiale online și offline. Ea are 23 de ani, licențiată în
                  publicitate, urmând în prezent un master de social media și
                  marketing online în cadrul Școlii Naționale de Studii Politice
                  și Administrative.
                </p>
                <p>
                  <span className="text-primary-500 font-bold">Ruxandra</span>{' '}
                  consideră că societatea ar trebui să fie mai implicată în
                  cauzele umanitare, în special cele pentru educația copiilor
                  din medii defavorizate, ceea ce i-a determinat interesul
                  pentru domeniul de activitate al ONG-urilor.
                </p>
                <p className="text-right pt-2">ruxandra@swordnation.ro</p>
              </>
            }
            image={{
              src: '/assets/images/ruxandragroapapoza.png',
              alt: 'Random name avatar alt text',
            }}
          />
          <TeamCard
            name="Vlad Darabonț"
            position="Ofițer de Proiecte"
            description={
              <>
                <p>
                  <span className="text-primary-500 font-bold">Vlad</span> este
                  un fizioterapeut tenace, fiind extrem de interesat de
                  problemele de „hardware” și „software” ale oamenilor, antrenor
                  entuziast de baschet ce dorește să trezească, în cei pe care
                  îi antrenează, pasiunea pentru sport și ofițer de proiecte în
                  cadrul{' '}
                  <span className="text-primary-500 font-bold">
                    Sword Nation
                  </span>
                  .
                </p>
                <p>
                  Pentru{' '}
                  <span className="text-primary-500 font-bold">Vlad</span>,
                  apropierea de sport a început cu o oră de antrenament, apoi
                  învățarea jocului de baschet s-a întins pe mai bine de un
                  deceniu din viața sa. Dragostea față de acest sport l-a condus
                  spre frumoasa carieră de antrenor de baschet, având misiunea
                  nu numai de a înrădăcina cultura sportului, ci și de a forma
                  oameni, de a clădi caractere. Tot sportul a reprezentat un
                  puternic factor decizional pentru modul în care{' '}
                  <span className="text-primary-500 font-bold">Vlad</span>{' '}
                  servește societatea. Acesta a ales să se preocupe de durerile
                  și neajunsurile fizice ale oamenilor ale oamenilor de rând,
                  iar, pe de altă parte, caută să integreze prevenția și să
                  maximizeze performanțele sportivilor profesioniști.
                </p>
                <p>
                  Gândul că ar putea să ofere și să ajute l-a determinat să se
                  alăture echipei{' '}
                  <span className="text-primary-500 font-bold">
                    Sword Nation
                  </span>
                  , având privilegiul și datoria de a deschide noi porți, de a
                  crea noi oportunități, de a îmbunătăți practica și metodica
                  sportului și de a reprezenta o ancoră pentru cei din breaslă
                  și nu numai.
                </p>
                <p className="text-right pt-2">vlad@swordnation.ro</p>
              </>
            }
            image={{
              src: '/assets/images/vladdarabontpoza.png',
              alt: 'Random name avatar alt text',
            }}
          />
          <TeamCard
            name="Paul Costea"
            position="Coordonator scrimă Sword Nation – Chitila"
            description={
              <>
                <p>
                  <span className="text-primary-500 font-bold">Paul</span> este
                  instructor sportiv certificat din anul 2017, a practicat
                  scrima la CS Dinamo între anii 2009-2017 obținând multiple
                  titluri și medalii pe plan național. Între anii 2018-2019 a
                  activat ca antrenor în cadrul clubului CS Dinamo, iar din 2019
                  e implicat în proiectele{' '}
                  <span className="text-primary-500 font-bold">
                    Sword Nation
                  </span>
                  .
                </p>
                <p>
                  În prezent,{' '}
                  <span className="text-primary-500 font-bold">Paul</span>{' '}
                  lucrează îndeaproape cu grupul de copii din cadrul proiectului
                  Sword Nation – Chitila și dezvoltă conceptul altor două
                  proiecte ale asociației, dedicate popularizării scrimei în
                  contexte sociale insuficient deservite.
                </p>
                <p className="text-right pt-2">paul@swordnation.ro</p>
              </>
            }
            image={{
              src: '/assets/images/paulicacosteapoza.png',
              alt: 'Random name avatar alt text',
            }}
          />
        </div>
      </Section>
    </div>
  );
};

export { TeamCards };
