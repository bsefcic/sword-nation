type ILogoProps = {
  xl?: boolean;
  hideText?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img src="/assets/images/SN_icon_nobg.png" alt="logo" width="80px"></img>

      {!props.hideText}
    </span>
  );
};

export { Logo };
