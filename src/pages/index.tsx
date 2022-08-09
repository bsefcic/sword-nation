import { Base } from '../template/Base';

type IBaseProps = {
  locale: string;
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
    },
  };
}

const Index = (props: IBaseProps) => {
  return <Base locale={props.locale} />;
};

export default Index;
