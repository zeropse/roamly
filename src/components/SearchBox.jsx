import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-between gap-2 bg-white rounded-full p-2 w-110">
      <input
        type="text"
        placeholder="Enter a destination or keyword"
        className="bg-white rounded-full p-2 text-black flex-grow outline-none"
      />
      <Search className="h-5 w-5 text-gray-500" />
      <div className="flex gap-2 mr-3">
        <button className="bg-[#33818a] hover:bg-[#33818a]/80 text-white rounded-md p-2 cursor-pointer">
          Search
        </button>
        <button className="bg-[#33818a] hover:bg-[#33818a]/80 text-white rounded-md p-2 cursor-pointer">
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
