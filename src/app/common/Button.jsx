// bg-[#CCCCCC]

const Button = ({
  children,
  disabled = false,
  variant,
  size,
  className,
  props,
  onClick,
}) => {
  const buttonColor = {
    primary:
      "bg-[white] border border-[#121212] text-[#121212] hover:transition-all hover:duration-500",
    secondary:
      "border border-[#121212] text-[white] bg-[#121212] hover:transition-all hover:duration-500",
    tertiary:
      "bg-[linear-gradient(1.54deg,#4379FF_-179.29%,#51F4A6_88.65%)] text-[#282a03] w-fit hover:opacity-[0.8] hover:transition-all hover:duration-500",
    switch: "text-base text-[#2D865B] bg-transparent",
    //   bg-[linear-gradient(180deg,rgba(28,62,49,0.04)_28.06%,#1C3E31_40.79%)]
  };

  // const buttonSize = {
  //   small: "text-base py-3 px-8",
  //   medium: "px-8 py-4",
  //   large: "bg-[#282a03] text-white",
  //   switch: "",
  // };
  return (
    <button
      className={`block py-3 px-4 font-medium  rounded-md text-base ${buttonColor[variant]} ${className} max-md:w-full`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
