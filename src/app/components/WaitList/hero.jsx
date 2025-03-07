import Image from "next/image";
import WaitListForm from "./waitListForm";

const Hero = () => {
  return (
    <section className="bg-[#031B3A] pt-8 relative pb-[7rem]">
      <div className="max-w-[1250px] mx-auto px-4 max-sm:px-2">
        <nav className="flex justify-between items-center mb-16">
          <Image
            src="/assets/icons/commonIcons/logo.svg"
            alt="swapHubLogo"
            width={90}
            height={60}
          />
          <p className="bg-[white] text-[#303030] font-semibold text-sm p-3 rounded-lg">
            Features
          </p>
        </nav>

        <div className="flex justify-between max-lg:gap-6 max-md:flex-col max-sm:gap-y-12">
          <div className="w-[500px] max-lg:w-full">
            <h1 className="text-white text-7xl font-semibold text-wrap leading-[88px] mb-6 tracking-tighter max-lg:text-6xl max-sm:text-4xl">
              The Future of Bartering is Almost Here!
            </h1>
            <p className="text-[#e3e3e3] text-xl font-normal leading-7 mb-6 text-wrap">
              Swaphub is on the way! Trade your products with a smile, knowing
              every swap is safe and simple.
            </p>

            <div className="p-4 bg-white rounded-[20px] flex-col justify-center items-start gap-2.5 w-full">
              <p className="text-[#303030] text-xl font-normal leading-7 mb-[10px]">
                Join the waitlist today.
              </p>

              <WaitListForm />
            </div>
          </div>

          <div className="relative">
            <div>
              <Image
                src="/assets/image/image.png"
                width={500}
                height={500}
                alt="barter"
                className=""
              />
            </div>
            <div className=" absolute bg-[#004EB2] p-2 top-[-1.8rem] right-[-0.7rem] rounded-lg max-md:hidden max-sm:block max-sm:right-[-0.5rem]">
              <Image
                src="/assets/icons/load.svg"
                alt=""
                width={34}
                height={34}
              />
            </div>
            <div className="absolute bg-[#004EB2] p-2 bottom-[-1.8rem] left-[-0.7rem] rounded-lg max-lg:hidden max-md:block max-sm:block max-sm:left-[-0.6rem]">
              <Image
                src="/assets/icons/star.svg"
                alt=""
                width={34}
                height={34}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/image/shape.png')] bg-repeat absolute bottom-0 w-full h-[70px] mx-auto"></div>
    </section>
  );
};

export default Hero;
