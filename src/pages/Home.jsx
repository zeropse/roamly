const Home = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col items-start justify-center mt-40 ml-40">
        <h1 className="text-7xl font-bold">EXPLORE</h1>
        <h1 className="text-7xl font-bold">DREAM</h1>
        <h1 className="text-7xl font-bold">DESTINATION</h1>

        <p className="text-center text-wrap w-1/4 mt-5">
          It encourages you to explore the world and dream of your next
          adventure. It is a platform that allows you to find the best places to
          visit and the best things to do.
        </p>

        <button className="bg-[#3E43B6] hover:bg-[#7450C2] text-white p-2 rounded-md mt-5 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
