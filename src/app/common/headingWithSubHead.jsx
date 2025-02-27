const HeadingWithSubHead = ({
  withSubHead,
  heading,
  subhead,
  className,
  vaiant,
  subHeadWidth,
}) => {
  const headingVariant = {
    primary:
      "text-[3.4rem] leading-[4rem] max-lg:text-[2.5rem] max-lg:leading-[3rem] max-md:text-5xl",
    secondary: "text-5xl max-lg:text-3xl max-md:text-[28px] max-md:leading-9",
  };
  return (
    <div className={`flex flex-col gap-y-4 ${className} `}>
      <h1
        className={`font-bold font-recoletaBold text-[#303030] ${headingVariant[vaiant]}`}
      >
        {heading}
      </h1>
      {withSubHead && (
        <p
          className={`text-2xl text-[#616161] ${subHeadWidth} max-md:text-base`}
        >
          {subhead}
        </p>
      )}
    </div>
  );
};

export default HeadingWithSubHead;
