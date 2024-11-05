import Image from "next/image";

const ProductCards = () => {
  return (
    <div className="h-[280px] w-fit flex flex-col gap-y-4 mt-6 mr-2">
      <div>
        <Image
          src="/assets/image/image.png"
          alt="product1"
          width={253}
          height={204}
        />
      </div>

      <div>
        <p className=" font-semibold text-[#303030] text-sm mb-3">
          iPhone 12, 64GB - Black
        </p>
        <p className="text-[#616161] text-sm mb-3">₦120,000 with Rice</p>
        <p className="text-[#616161] text-sm">Ojoo, Ibadan (5 Miles away)</p>
      </div>
    </div>
  );
};

export default ProductCards;
