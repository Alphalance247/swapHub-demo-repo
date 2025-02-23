const HeadingWithSubHead = ({
  withSubHead,
  heading,
  subhead,
  className,
  vaiant,
  subHeadWidth,
}) => {
  const headingVariant = {
    primary: "text-[3.4rem] leading-[4rem]",
    secondary: "text-5xl",
  };
  return (
    <div className={`flex flex-col gap-y-4 ${className}`}>
      <h1
        className={`font-bold font-recoletaBold text-[#303030] ${headingVariant[vaiant]}`}
      >
        {heading}
      </h1>
      {withSubHead && (
        <p className={`text-2xl text-[#616161] ${subHeadWidth}`}>{subhead}</p>
      )}
    </div>
  );
};

export default HeadingWithSubHead;
