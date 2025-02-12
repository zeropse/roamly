import { useState, useEffect, useRef } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState({ beaches: [], temples: [], countries: [] });
  const searchBoxRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const jsonData = await response.json();
        console.log("Fetched Data:", jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const lowerCaseTerm = searchTerm.toLowerCase();
    const categoryMap = {
      beach: "beaches",
      beaches: "beaches",
      temple: "temples",
      temples: "temples",
    };

    let matchedResults = [];

    if (categoryMap[lowerCaseTerm]) {
      matchedResults = data[categoryMap[lowerCaseTerm]]?.slice(0, 2) || [];
    } else {
      const matchedCountry = data.countries.find(
        (country) => country.name.toLowerCase() === lowerCaseTerm
      );
      if (matchedCountry) {
        matchedResults = matchedCountry.cities?.slice(0, 2) || [];
      }
    }

    setResults(matchedResults);
  };

  const handleClear = () => {
    setSearchTerm("");
    setResults([]);
  };

  return (
    <div className="relative" ref={searchBoxRef}>
      <div className="flex items-center bg-white rounded-full p-2 w-100 shadow-lg">
        <input
          type="text"
          placeholder="Enter a destination or keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="bg-white rounded-full p-2 text-black flex-grow outline-none"
        />
        <div className="flex gap-2 mr-3">
          <button
            onClick={handleSearch}
            className="bg-[#33818a] hover:bg-[#33818a]/80 text-white rounded-md p-2 cursor-pointer"
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className="bg-[#33818a] hover:bg-[#33818a]/80 text-white rounded-md p-2 cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-lg rounded-lg p-3 max-h-72 overflow-y-auto z-50">
          {results.map((place, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-md mb-2 flex gap-3 items-start"
            >
              <img
                src={place.imageUrl}
                alt={place.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{place.name}</h3>
                <p className="text-gray-600 text-sm">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
