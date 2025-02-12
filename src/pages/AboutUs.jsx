const AboutUs = () => {
  return (
    <div className="text-white py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
        <p className="bg-black/50 p-6 rounded-md text-lg leading-relaxed">
          Roamly is a platform that allows you to find the best places to visit
          and the best things to do. Our mission is to inspire and empower
          travelers to explore the world with confidence. We provide curated
          recommendations, travel tips, and detailed guides to help you plan
          your perfect trip. Whether you&apos;re seeking adventure in remote
          destinations or looking to experience local culture in bustling
          cities, Roamly is your trusted companion for all your travel needs. We
          partner with local experts and experienced travelers to bring you
          authentic insights and hidden gems that make each journey truly
          memorable.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Team</h1>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col justify-center items-center gap-2 bg-black/50 p-6 rounded-md">
            <h2 className="text-2xl font-bold">Srijit Dey</h2>
            <p className="text-sm bg-[#3E43B6] p-2 rounded-md text-center">
              CEO
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 bg-black/50 p-6 rounded-md ">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Company History</h1>
        <p className="text-lg leading-relaxed">
          Roamly was founded in 2025 by Srijit Dey, a travel enthusiast who
          wanted to create a platform that would help people plan their perfect
          trip. The company is headquartered in Kolkata, India.
        </p>
        <h2 className="text-2xl font-bold mt-6">Our Location</h2>
        <img src="/bg.jpg" alt="Kolkata" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AboutUs;
