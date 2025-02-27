import HeadingWithSubHead from "@/app/common/headingWithSubHead";
import Button from "@/app/common/Button";
import { FaRegComment } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="py-28 px-10">
        <HeadingWithSubHead
          heading={"Showcase and Sell What You Offer Online With Ease."}
          className={"mb-6 text-center w-[60%] mx-auto"}
          vaiant={"primary"}
          withSubHead={true}
          subHeadWidth={"w-[65%] mx-auto"}
          subhead={
            "Turn your products and services into a seamless online experience for customers."
          }
        />

        <div className="flex items-center justify-center gap-x-4 max-lg:hidden">
          <Button
            variant="secondary"
            className="w-[258px] flex items-center gap-x-[10px] justify-center"
          >
            Create a free account{" "}
            <span>
              <GoArrowRight size={24} className="text-white" />
            </span>
          </Button>
          <Button
            variant="primary"
            className="w-fit flex items-center gap-x-[10px]"
          >
            Get inTouch <FaRegComment />
          </Button>
        </div>

        <div className="mx-auto mt-28">
          <Image
            src="/assets/Home/images/hero.png"
            width={996}
            height={600}
            alt="hero"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
