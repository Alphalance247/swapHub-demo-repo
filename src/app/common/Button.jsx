// bg-[#CCCCCC]

const Button = ({ children, disabled = false }) => {
  return (
    <button
      className="block py-4 bg-[#008000] rounded-lg text-white font-semibold text-sm w-full"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
