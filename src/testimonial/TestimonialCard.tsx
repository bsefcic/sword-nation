type ITestimonialCardProps = {
  image: {
    src: string;
    alt: string;
  };
  children: string;
  author: {
    name: string;
    position: string;
  };
};

const TestimonialCard = (props: ITestimonialCardProps) => (
  <div className="mt-4 first:mt-0 pl-3 pr-6 py-6 bg-white rounded-md">
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="flex flex-col sm:flex-row">
        <svg
          className="w-12 h-12 text-primary-500 fill-current flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 125"
        >
          <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zm51.7 0c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
        </svg>

        <div className="sm:mt-3 ml-3">
          <div className="indent-8 leading-7 text-gray-800">
            {props.children}
          </div>
          <div className="mt-2">
            <span className="text-gray-900 font-bold">{props.author.name}</span>{' '}
            -{' '}
            <span className="text-gray-700 font-medium">
              {props.author.position}
            </span>
          </div>
        </div>
      </div>

      <img
        className="mt-5 sm:mt-0 sm:ml-3 w-28 h-28 rounded-full bg-primary-500 self-center"
        src={props.image.src}
        alt={props.image.alt}
      />
    </div>
  </div>
);

export { TestimonialCard };
