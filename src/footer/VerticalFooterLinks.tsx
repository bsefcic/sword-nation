import { ReactNode } from 'react';

type IVerticalFooterLinksProps = {
  children: ReactNode;
};

const VerticalFooterLinks = (props: IVerticalFooterLinksProps) => (
  <ul className="vertical-footer-links text-center">
    {props.children}

    <style jsx>
      {`
        .vertical-footer-links :global(li) {
          display: block;
        }
      `}
    </style>
  </ul>
);

export { VerticalFooterLinks };
