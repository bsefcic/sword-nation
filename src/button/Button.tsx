import className from 'classnames';

type IButtonProps = {
  xs?: boolean;
  xl?: boolean;
  secondary?: boolean;
  full?: boolean;
  children: string;
  dark?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xs': props.xs,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-secondary': props.secondary,
    'btn-primary': !props.secondary,
    'btn-dark': props.dark,
    'w-full': props.full,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-xs {
            @apply text-sm py-2 px-2;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }

          .btn-secondary {
            @apply bg-gray-300;
          }

          .btn-secondary:hover {
            @apply bg-gray-400;
          }

          .btn-dark {
            @apply text-primary-500 bg-gray-100;
          }

          .btn-dark:hover {
            @apply bg-gray-300;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
