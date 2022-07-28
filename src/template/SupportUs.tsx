import useDownloader from 'react-use-downloader';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const SupportUs = () => {
  const { download } = useDownloader();
  const fileUrl = `/assets/model_contract.docx`;
  const filename = `model_contract_redirectionare_ASN.docx`;
  return (
    <Background color="bg-primary-500">
      <Section
        id="support"
        title="Susține-ne proiectele"
        subtitle="Fă o faptă bună!"
        description="Investește în educația non-formală a copiilor defavorizați, investește într-o generație viitoare mai echilibrată și mai performantă! Proiectele noastre se adresează acelor copii cu potențial și talent, care însă nu au ocazia de a și le exprima. Donația ta ne ajută să le oferim aripi și încredere în sine! Donează printr-un transfer către contul nostru:
        "
      >
        <div className="text-center text-gray-900">
          <p>
            Cont in RON - IBAN: {` `}
            <span className="font-bold">RO84RNCB0082166606290001</span>
          </p>
          <p>Asociația Sword Nation</p>
          <p>Registrul Asociațiilor și Fundațiilor nr. 88/27.09.2019</p>
          <p>CIF: 41712251</p>
          <div className="mt-16 pb-16 border-b border-black border-opacity-30">
            <div className="bg-primary-600 bg-opacity-30 rounded-3xl text-gray-900 px-4 py-12 border-2">
              <p className="text-xl mb-6 font-bold italic">
                Companii - 20% din impozit pe profit
              </p>
              <p className="mb-8 indent-8">
                Ai o companie și vrei să te implici social, fără să te coste
                nimic? Poți direcționa 20% din impozit ca sponsorizare pentru
                dezvoltarea copiilor aflați în grija Sword Nation. E gratis!
                Descarcă modelul de contract de alături și trimite-l pe adresa
                am@swordnation.ro, iar un membru al echipei te va contacta cât
                de repede.
              </p>
              <p className="indent-8">
                Sponsorizarea ta sau a companiei tale contribuie la acoperirea
                costurilor de echipamente, nutriție adecvată sau deplasări la
                competiții pentru cei aproape 100 de copii din medii
                defavorizate care practică sportul în regim susținut prin
                proiectele noastre. Mulțumim că te implici!
              </p>
              <button
                className="bg-white text-gray-900  italic mt-6 py-3 px-3 hover:scale-90 rounded-xl hover:bg-gray-300"
                onClick={() => download(fileUrl, filename)}
              >
                Descarcă Document
              </button>
            </div>
          </div>
          <div className="mt-16">
            <div className="bg-primary-600 bg-opacity-30 rounded-3xl text-gray-900 px-4 py-12 border-2">
              <p className="text-xl mb-6 font-bold italic">
                Persoane fizice - 3.5% din impozit pe venit
              </p>
              <p className="mb-8 indent-8">
                Poți susține proiectele și copiii noștri prin redirecționarea a
                3,5% din impozitul pe venit, ca angajat. Redirecționarea este un
                drept al fiecărui angajat și o modalitate simplă de a te implica
                în comunitățile de care îți pasă.
              </p>
              <p className="indent-8">
                Este gratuit și foarte simplu - trebuie doar să completezi
                datele tale la link-ul de alături și să transmiți documentul
                generat de platformă pe adresa am@swordnation.ro.
              </p>

              <a
                href="https://formular230.ro/sword-nation"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-white text-gray-900 italic mt-3 py-3 px-3 hover:scale-90 rounded-xl hover:bg-gray-300">
                  formular230.ro/sword-nation
                </button>
              </a>
              <p className="text-black text-opacity-80 italic text-xs mt-6">
                Campania de redistribuire a impozitului echivalent anului 2022,
                va fi anunțată în ianuarie 2023
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { SupportUs };
