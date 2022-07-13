import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { TestimonialCard } from '../testimonial/TestimonialCard';
import { TestimonialHeader } from '../testimonial/TestimonialHeader';

const Team = () => (
  <Background color="bg-primary-500">
    <Section id="team" yPadding="py-36">
      <div className="grid grid-cols-1 gap-5 items-center">
        <TestimonialHeader subtitle="Awesome customers" title="Echipa noastră">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          tristique nibh ac diam pretium tincidunt. Vestibulum sed est velit.
        </TestimonialHeader>

        <div>
          <TestimonialCard
            image={{
              src: '/assets/images/avatar.png',
              alt: 'Random name avatar alt text',
            }}
            author={{
              name: 'Mihai Cucu-Dumitrescu',
              position: 'CEO of Something',
            }}
          >
            mihai este cofondator si presedinte al asociatiei sword nation din
            2018, de cand organizatia a inceput sa se dezvolte treptat. cu un
            background in sociologie si stiinte politice, mihai are experienta
            de lucru in project management, programe si seminarii de leadership,
            due diligence, management sportiv, antrenorat si arbitraj - in
            mediul privat, public si ong. mihai are o licență în științe
            politice de la universitatea din padova (2017) și un master în
            terorism și violență politică de la universitatea din birmingham
            (2018). cariera sa sportivă constă în aproximativ 13 ani în care a
            practicat scrimă în românia, italia și marea britanie și a
            participat în calitate de sportiv la campionate naționale, etape de
            cupă mondială și campionate europene. din 2021, mihai deține licența
            b de arbitru al federației internaționale de scrimă și oficiază la
            competiții în toată lumea. în timpul liber, îi face mare plăcere să
            antreneze una din grupele de sportivi ai asociației, să alerge, să
            cânte la chitarele sale, să scrie poezie și să petreacă timp cu
            familia și prietenii cei mai apropiați.
          </TestimonialCard>
          <TestimonialCard
            image={{
              src: '/assets/images/avatar2.png',
              alt: 'Random name avatar alt text',
            }}
            author={{
              name: 'Catalin-Andrei Dumitru',
              position: 'CEO of Something',
            }}
          >
            fost sportiv de performanta in ramura sabie din scrima
            romanesca,legitimat la clubul sportiv al armatei steaua ,component
            in loturile nationale de juniori si tineret, si-a inceput
            activitatea sportiva la varsta de 10 ani alaturi de antrenorul
            adrian carlescu badea.cariera sportiva a durat 13 ani cu participari
            multiple la campionate europene(cadeti-juniori),etape de cupa
            mondiala si concursuri nationale si internationale.palmares-ul a
            fost unul vast cu multiple medalii de aur,argint si bronz,atat pe
            plan intern cat si extern. la acest moment in cadrul asociatiei
            sword nation,detine functia de co-fondator si antrenor principal pe
            sectia sportiva scrima.obiectivul acestuia este de a mentine grupul
            constant si impreuna sa ne putem dezvolta atat pe plan personal cat
            si pe plan sportiv.fiecare sportiv are ceva unic si datoria noastra
            este sa ne dam seama care sunt acestea si ulterior sa le dezvoltam
            prin metode si tehnici eficiente.
          </TestimonialCard>
          <TestimonialCard
            image={{
              src: '/assets/images/avatar.png',
              alt: 'Random name avatar alt text',
            }}
            author={{
              name: 'Andrei Matei',
              position: 'CEO of Something',
            }}
          >
            cu un background in rugby-ul de performanta, matei andrei si-a
            inceput parcursul de leader de la o varsta frageda, fiind
            vice-capitanul unei echipe de rugby cu aspiratii la castigarea
            campionatului national, an de an. absolvent al academiei de studii
            economice bucuresti, acesta si-a dedicat parcusul profesional
            formarii tinerilor in industria de esports (gaming profesionist).
            prin activitatea sa la team singularity, acesta a modelat parcursul
            profesional a tinerilor cu varste cuprinse intre 16 – 20 de ani. in
            prezent ofiter de proiect in cadrul sword nation, acesta isi propune
            sa adapteze si sa modernizeze cultura sportului romanesc catre o
            deschidere mai mare fata de necesitatea sociala de practicare a
            sportului.
          </TestimonialCard>
          <TestimonialCard
            image={{
              src: '/assets/images/avatar3.png',
              alt: 'Random name avatar alt text',
            }}
            author={{
              name: 'ruxandra groapă',
              position: 'CEO of Something',
            }}
          >
            se ocupă de social-media pentru paginile sword nation. ajută la
            formarea identității vizuale a organizației, prin materiale online
            cât și offline. 23 de ani, licențiată în publicitate, urmând în
            prezent un master de social-media și marketing online. consideră că
            societatea ar trebui să fie mai implicată în cauzele umanitare, în
            special cele pentru educația copiilor din medii defavorizate, ceea
            ce i-a determinat interesul pentru domeniul de activitate al
            ong-urilor.
          </TestimonialCard>
          <TestimonialCard
            image={{
              src: '/assets/images/avatar3.png',
              alt: 'Random name avatar alt text',
            }}
            author={{
              name: 'vlad darabonț',
              position: 'CEO of Something',
            }}
          >
            vlad este fizioterapeut tenace, fiind extrem de interesat de
            problemele de „hardware” și „software” ale oamenilor, și antrenor
            entuziast de baschet ce dorește să trezească, în cei pe care îi
            antrenează, pasiunea pentru sport. pentru vlad, totul a început cu o
            oră de antrenament, apoi învățarea jocului de baschet s-a întins pe
            mai bine de un deceniu din viața sa. dragostea față de acest sport
            l-a condus spre frumoasa atribuție de antrenor de baschet, având
            misiunea nu numai de a înrădăcina cultura sportului, ci și de a
            forma oameni, de a clădi caractere. tot sportul a reprezentat un
            puternic factor decizional pentru modul în care vlad servește
            societatea. acesta a ales să se preocupe de durerile și neajunsurile
            fizice ale oamenilor, iar, pe de altă parte, caută să integreze
            prevenția și să maximizeze performanțele sportivilor. gândul că ar
            putea să ofere și să ajute l-a determinat să se alăture echipei
            sword nation, având privilegiul și datoria de a deschide noi porți,
            de a crea noi oportunițăți, de a îmbunătăți practica și metodica
            sportului românesc și de a reprezenta o ancoră pentru cei din
            breaslă și nu numai.
          </TestimonialCard>
        </div>
      </div>
    </Section>
  </Background>
);

export { Team };
