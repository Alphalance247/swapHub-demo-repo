import { FaRegComment } from "react-icons/fa";

const SecondaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-black text-black px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition"
    >
      {text} <FaRegComment />
    </button>
  );
};

export default SecondaryButton;
