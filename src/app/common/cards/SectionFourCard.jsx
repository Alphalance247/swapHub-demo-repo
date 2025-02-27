import Image from "next/image";

export default function FeatureCard({
  title,
  description,
  image,
  customStyles,
}) {
  return (
    <div
      className={`relative bg-[#E3E3E3] rounded-s-2xl shadow-md text-left flex items-end border-gray-300 p-10 max-lg:p-6`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div> */}

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="w-[100%] h-[200px]">
          {/* <Image
            src="/assets/image/sellproduc.png"
            width={500}
            height={50}
            alt=""
          /> */}
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-recoletaBold text-[#303030]">{title}</h3>
          <p className="text-lg text-[#616161] mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
