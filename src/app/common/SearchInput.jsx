const Input = ({
  className,
  variant = "default",
  props,
  style,
  placeholder,
}) => {
  const variantStyles = {
    default: "bg-[#F1F1F1] px-4",
    primary: "border-[#8A8A8A] border-2 pl-10 pr-4",
    tertiary: "border-[#8A8A8A] border-2 pr-10 pl-4",
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value=""
      className={`w-full py-3 outline-none rounded-lg ${className} ${variantStyles[variant]}`}
      {...props}
      style={{ style }}
    />
  );
};

export default Input;
