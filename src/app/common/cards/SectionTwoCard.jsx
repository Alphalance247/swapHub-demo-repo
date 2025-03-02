import Image from "next/image";

export default function Card({ title, description, image }) {
  return (
    <div className="bg-[#E3E3E3] rounded-2xl shadow-md overflow-hidden transition-colors duration-300">
      {/* Text Section */}
      <div className="pt-10 px-9 mb-28 max-lg:px-4 max-lg:mb-14 max-lg:pt-5">
        <h3 className="text-2xl font-semibold text-[#303030] font-recoletaBold max-lg:text-xl">
          {title}
        </h3>
        <p className="text-[#616161] text-lg mt-4 max-lg:text-base">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-[580px] h-[316px] rounded-[16px] border border-gray-300 dark:border-gray-600 overflow-hidden">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
