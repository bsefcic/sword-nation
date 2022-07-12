import { ReactNode } from 'react';

type IQuestionAnswerProps = {
  question: string;
  children: ReactNode;
};

const QuestionAnswer = (props: IQuestionAnswerProps) => (
  <div className="question-answer flex mt-16 first:mt-0">
    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-400 flex-shrink-0">
      <svg
        className="text-white stroke-current w-6 h-6 stroke-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M8 8a3.5 3 0 013.5-3h1A3.5 3 0 0116 8a3 3 0 01-2 3 3 4 0 00-2 4M12 19v.01" />
      </svg>
    </div>

    <div className="ml-4">
      <div className="text-2xl text-primary-500 font-semibold leading-7">
        {props.question}
      </div>

      <div className="text-lg leading-7">{props.children}</div>
    </div>

    <style jsx>
      {`
        .question-answer :global(p) {
          @apply mt-4;
        }

        .question-answer :global(a) {
          @apply text-primary-500;
        }

        .question-answer :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { QuestionAnswer };
