import Image from "next/image";

const Footer = () => {
  const data = [
    {
      img: "/assets/icons/commonIcons/instagram.svg",
      src: "",
    },
    {
      img: "/assets/icons/commonIcons/facebook.svg",
      src: "",
    },
    {
      img: "/assets/icons/commonIcons/gmail.svg",
      src: "",
    },
    {
      img: "/assets/icons/commonIcons/twitter.svg",
      src: "",
    },
  ];
  return (
    <footer className="bg-[#EBEBEB] py-16">
      <div className="max-w-[1250px] px-4 flex justify-between mx-auto max-md:flex-col max-md:items-center max-md:gap-y-5">
        <div className=" inline-flex gap-x-3">
          {data.map((item, i) => {
            return (
              <div key={i}>
                <Image
                  src={item.img}
                  alt="socialIcons"
                  width={24}
                  height={24}
                />
              </div>
            );
          })}
        </div>
        <p className="text-center text-[#303030] text-base leading-normal">
          ©2024 Swaphub All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
