import Image from "next/image";

export default function Card({ title, description, image }) {
  return (
    <div className="bg-[#E3E3E3] rounded-2xl shadow-md overflow-hidden transition-colors duration-300">
      {/* Text Section */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      </div>

      {/* Image Section */}
      <div className="relative w-[580px] h-[316px] rounded-[16px] border border-gray-300 dark:border-gray-600 overflow-hidden">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
