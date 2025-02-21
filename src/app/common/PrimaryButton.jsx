const PrimaryButton = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
      >
        {text} →
      </button>
    );
  };
  
  export default PrimaryButton;
  