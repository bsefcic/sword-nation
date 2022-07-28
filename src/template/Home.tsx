const Home = () => {
  return (
    // <img
    //   src="/assets/images/home_image.png"
    //   alt="home"
    //   className="w-full m-auto"
    // ></img>
    <div
      className="min-h-screen min-w-screen bg-cover bg-center 
    bg-smallestImage sm:bg-mdImage md:bg-mdImage lg:bg-lgImage xl:bg-xlImage 2xl:bg-xxlImage sm:bg-right-bottom"
    >
      <div className="flex h-screen">
        <div className="sml:m-auto sml:text-center 2xl:w-3/5 2xl:pl-24 2xl:indent-8">
          <p
            className="font-bold sml:text-3xl sml:pt-48 sml:px-6 sm:text-4xl
           2xl:pt-72 2xl:text-5xl 2xl:text-center text-gray-900"
          >
            Asociația Sword Nation contribuie la dezvoltarea viitoare generații
            cu inițiative de incluziune socială prin sport
          </p>
          <div className="text-gray-800 text-right italic sml:mr-8">
            <p className="text-xl mt-4 2xl:text-3xl 2xl:mt-32 2xl:mr-32">
              &quot;All sports for all people&quot;
            </p>
            <p className="2xl:mr-64 2xl:text-xl">Pierre de Coubertin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
