import { ReactNode } from 'react';

import { FooterIconList } from './FooterIconList';
import { VerticalFooterLinks } from './VerticalFooterLinks';

type IFooterTwoRowsCopyrightProps = {
  siteName: string;
  iconList: ReactNode;
  verticalLinks: ReactNode;
  children: ReactNode;
};

const FooterTwoRowsCopyright = (props: IFooterTwoRowsCopyrightProps) => (
  <>
    <div className="w-fit-content mx-auto">
      <div className="w-fit-content mx-auto font-semibold mb-6 text-2xl text-gray-800">
        Contact
      </div>
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-y-5 items-center justify-center border-t border-gray-300 pt-10">
      <div className="text-center text-sm lg:text-left italic">
        Asociația Sword Nation este înregistrată în Registrul Asociațiilor și
        Fundațiilor cu nr. 88/27.09.2019 şi are codul fiscal (CIF) 41712251.
        Cont in RON - IBAN: RO84RNCB0082166606290001, codul BIC: RNCB, codul
        SWIFT: RNCBROBU
      </div>

      <div className="w-fit-content mx-auto">
        <VerticalFooterLinks>{props.verticalLinks}</VerticalFooterLinks>
      </div>

      <div className="text-sm text-center lg:text-right">
        {`© Copyright ${new Date().getFullYear()} ${
          props.siteName
        }. All Rights Reserved.`}
      </div>
    </div>
  </>
);

export { FooterTwoRowsCopyright };
