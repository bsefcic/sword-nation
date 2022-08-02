import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const TermsConditions = () => (
  <div className="antialiased text-gray-700">
    <Meta
      title="Termenii şi condiţii - Sword Nation"
      description={AppConfig.description}
    />
    <Navbar prefix="../" />
    <Section id="terms" yPadding=" pt-36 pb-24" title="Termenii şi condiţii">
      <div className="indent-8 mt-12">
        <p>
          Pentru utilizarea site-ului www.swordnation.ro (“Site-ul”) este
          necesara citirea si acceptarea in totalitate a termenilor si
          conditiilor de mai jos. Vizitarea in continuare a Site-ului presupune
          acceptarea integrala a conditiilor de utilizare.
        </p>
        <p className="font-bold pt-4 pb-4">Proprietatea Conţinutului</p>
        <p>
          Site-ul şi tot ceea ce cuprinde acesta, incluzând, fără limitare,
          toate textele şi imaginile (“Conţinut“) sunt în proprietatea şi sub
          dreptul de autor (Copyright) al Asociației Sword Nation. Orice
          Conţinut care constă într-un logo sau marca de serviciu reprezintă
          marca inregistrată şi neînregistrată a Asociației Sword Nation. Este
          strict interzisă utilizarea oricărui Conţinut, cu excepţia celor
          prevăzute în Condiţiile de Utilizare, fără permisiunea în scris a
          proprietarului Conţinutului.
        </p>
        <p className="font-bold pt-4 pb-4">Utilizarea Site-ului</p>
        <p>
          Asociația Sword Nation acordă permisiunea de a utiliza Site-ul în
          următoarele condiţii:
        </p>
        <p>
          Puteți descărca Conţinutul, însă doar pentru folosul personal şi
          necomercial şi cu condiţia de a vă conforma cu informaţiile
          referitoare la dreptul de autor (copyright) şi alte drepturi de
          proprietate intelectuală cuprinse în Conţinut;
        </p>
        <p>
          Nu aveţi permisiunea să utilizaţi imagini din Site fără acordul în
          scris al unui reprezentant oficial al Asociației Sword Nation.
        </p>
        <p>
          Conţinutul Site-ului poate fi reprodus doar în scopuri editoriale în
          ziare, reviste de circulaţie generală, publicaţii comerciale şi
          posturi de radio şi televiziune;
        </p>
        <p>
          Nu aveţi permisiunea să distribuiţi, să modificaţi, să copiaţi (cu
          excepţia celor mai sus menţionate), să transmiteţi, să expuneţi, să
          refolosiţi, să reproduceţi, să publicaţi, să autorizaţi, să acordaţi o
          licenţă de folosire, să creaţi lucrări derivate din sau să
          transferaţi, să vindeţi sau să folosiţi Conţinutul în alt mod, fără
          acordul în scris al unui reprezentant oficial al Asociației Sword
          Nation.
        </p>
        <p>
          Este interzis să utilizaţi Site-ul în scop de publicitate sau pentru
          orice fel de cerere/ofertă cu caracter comercial.
        </p>
        <p className="font-bold pt-4 pb-4">Confidenţialitate</p>
        <p>
          Datele cu caracter personal pe care dumneavoastră ni le furnizaţi prin
          intermediul Site-ului vor fi folosite în conformitate cu Politica de
          Confidenţialitate.
        </p>
        <p className="font-bold pt-4 pb-4">Exonerarea de Răspundere</p>
        <p>
          Utilizarea acestui site este în totalitate pe răspunderea
          dumneavoastră. Asociația Sword Nation, conducerea, angajații sau orice
          altă parte implicată în conceperea, producerea sau oferirea Site-ului
          nu sunt răspunzători pentru daune directe sau indirecte, de orice
          natură, ce ar rezulta din sau în legatură cu utilizarea acestui site
          sau a conţinutului său. Asociația Sword Nation nu îşi asumă nicio
          responsabilitate şi nu va fi răspunzătoare pentru nicio daună sau
          viruşi care ar putea să vă infecteze computerul sau alte bunuri în
          urma accesării sau utilizării acestui site sau descărcării oricărui
          material, informaţii, text, imagini video sau audio de pe acest site.
        </p>
        <p className="font-bold pt-4 pb-4">
          Link-uri pe site-urile unei terţe părţi
        </p>
        <p>
          Site-ul poate conţine link-uri către alte site-uri aflate în
          proprietatea sau operate de alte părţi decât Asociația Sword Nation.
          Astfel de link-uri vă sunt furnizate pentru a le folosi numai dacă
          veţi dori.
        </p>
        <p>
          Asociația Sword Nation nu controlează şi nu este răspunzătoare pentru
          conţinutul şi condiţiile de confidenţialitate sau securitate şi de
          funcţionalitatea acestor site-uri. Fără a se limita la acestea,
          Asociația Sword Nation îşi declină în mod special orice răspundere
          dacă aceste site-uri încalcă drepturile de proprietate intelectuală
          ale unei terţe părţi, conţin informaţii înşelătoare, nu oferă o
          securitate adecvată, conţin viruşi sau alte elemente cu caracter
          distructiv sau sunt licenţioase sau calomnioase.
        </p>
        <p className="font-bold pt-4 pb-4">
          Revizuiri ale acestor Condiţii de Utilizare
        </p>
        <p>
          Asociația Sword Nation poate în orice moment şi fără notificare
          prealabilă, să revizuiască Condiţiile de Utilizare.
        </p>
        <p className="font-bold pt-4 pb-4">
          Legislaţie aplicabilă. Jurisdictie.
        </p>
        <p>
          Condiţiile de Utilizare a Site-ului sunt guvernate de legile din
          România. Instanţele competente din România vor avea jurisdicţie
          exclusivă asupra oricăror şi tuturor disputelor ce vor apărea din sau
          vor fi în legătură cu prevederile Condiţiilor de Utilizare şi/sau
          Conţinutul său.
        </p>
      </div>
    </Section>
    <Footer />
  </div>
);

export { TermsConditions };
