type INewsletterProps = {
  submitText: string;
};

const Form = (props: INewsletterProps) => (
  <form>
    <div className="flex flex-col sm:flex-row items-stretch justify-center">
      <input
        className="w-full bg-white py-3 px-6 rounded-md appearance-none border-2 border-gray-400 hover:border-primary-500 focus:outline-none focus:border-primary-500"
        placeholder="Enter your email address"
      />

      <button
        className="ml-0 sm:ml-2 mt-2 sm:mt-0 py-3 px-6 rounded-md appearance-none bg-primary-500 text-white font-extrabold hover:bg-primary-600 whitespace-nowrap focus:outline-none"
        type="button"
      >
        {props.submitText}
      </button>
    </div>
  </form>
);

export { Form };
