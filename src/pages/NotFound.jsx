import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#bbf0f5] text-black">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <button
        className="bg-[#33818a] hover:bg-[#33818a]/80 text-white rounded-md p-2 cursor-pointer mt-4"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
