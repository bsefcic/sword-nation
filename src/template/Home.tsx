const Home = () => {
  return (
    <section
      className="bg-cover bg-center h-screen w-full
    bg-smallestImage sm:bg-bgImage sm:bg-bottom overflow-hidden"
    >
      <div className="sm:grid sm:grid-cols-[minmax(0,_1200px)_minmax(0,_1200px)] sm:h-screen sm:justify-items-center">
        <div className="sml:m-auto sml:text-center lg:pl-24 lg:indent-8">
          <p
            className="font-bold sml:text-3xl sml:pt-[416px] sml:px-6 sm:text-3xl sm:mt-36 sm:text-center sm:pt-32 lg:text-4xl xl:mt-24
            xl:text-5xl  text-gray-900"
          >
            Asociația Sword Nation contribuie la dezvoltarea viitoarei generații
            cu inițiative de incluziune socială prin sport
          </p>
          <div className="text-gray-800 text-right italic sml:mr-8">
            <p className="text-xl mt-4 lg:text-3xl sm:mt-32">
              &quot;All sports for all people&quot;
            </p>
            <p className=" lg:text-lg xl:text-xl">Pierre de Coubertin</p>
          </div>
        </div>
        <div className="justify-self-center sml:hidden sm:relative">
          <img
            src="/assets/images/snheroicon.png"
            alt=""
            className="w-2/3 mt-36 mx-auto"
          ></img>
          <img
            src="/assets/images/snherokids.png"
            alt=""
            className="w-3/5 mx-auto absolute bottom-0 right-0 min-w-full"
          ></img>
        </div>
      </div>
    </section>
  );
};

export { Home };
