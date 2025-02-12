import { Plane } from "lucide-react";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gradient-to-r from-[#3E43B6] to-[#7450C2] text-white p-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Plane className="w-6 h-6" />
        <h1 className="font-bold italic">Roamly</h1>
      </div>
      <ul className="flex items-center gap-4 cursor-pointer">
        <li className="hover:text-gray-400" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="hover:text-gray-400" onClick={() => navigate("/about")}>
          About Us
        </li>
        <li
          className="hover:text-gray-400"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </li>
      </ul>
      <SearchBox />
    </div>
  );
};

export default Header;
