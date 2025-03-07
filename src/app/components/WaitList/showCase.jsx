import Image from "next/image";
const data = [
  {
    heading: "Effortless Swaps with In-App Wallet",
    subcontent:
      " Swaphub’s integrated wallet makes your bartering seamless. Store funds securely and manage transactions with ease, ensuring that every trade feels smooth and worry-free",
    imgSrc: "/assets/image/1.png",
  },
  {
    heading: "Real-Time Negotiation for Personalized Deals",
    subcontent:
      "Connect and negotiate in real-time with other users to customize your swaps. Whether it's product-for-product or combined with cash, you have full control to create deals that suit your needs.",
    imgSrc: "/assets/image/2.png",
  },
  {
    heading: "Secure Transactions for Peace of Mind",
    subcontent:
      "Trade confidently with Swaphub’s security measures, including identity verification and safe payment options. Enjoy worry-free swaps in a trusted environment.",
    imgSrc: "/assets/image/3.png",
  },
  {
    heading: "Location-Based Convenience",
    subcontent:
      "Coordinate meet-ups with live location sharing, making local trades safer and simpler. Swaphub bridges the gap between convenience and community-focused bartering.",
    imgSrc: "/assets/image/4.png",
  },
];
const ShowCase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="mb-[5rem] w-[600px] mx-auto max-md:w-full max-md:mb-12">
          <h1 className="text-center text-[#303030] text-[56px] font-semibold leading-[64px] mb-4 max-md:text-3xl">
            All what you want, is what we are building!
          </h1>
          <p className="text-center text-[#616161] text-base leading-normal max-md:text-sm">
            Swaphub is empowering you to effortlessly swap goods and services
            while ensuring your transactions are secure. Here’s what you can
            look forward to
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          {data.map((item, i) => {
            return (
              <div
                className="p-10 bg-[#ebebeb] rounded-3xl border flex-col justify-between inline-flex max-lg:p-7"
                key={i}
              >
                <p className="text-[#303030] text-[32px] font-semibold leading-10 mb-4 max-lg:text-2xl">
                  {item.heading}
                </p>
                <p className="text-[#4a4a4a] text-xl font-normal leading-7 mb-10 max-lg:text-base">
                  {item.subcontent}
                </p>

                <Image
                  width={400}
                  height={400}
                  src={item.imgSrc}
                  alt="product__showcase"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
