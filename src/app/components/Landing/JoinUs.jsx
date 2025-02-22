import Button from "@/app/common/Button";
import Container from "@/app/common/container";
import Layout from "@/app/common/layout";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section className="bg-[#303030] relative">
      <div className=" h-[100%]">
        <Image
          src="/assets/Home/images/1b.png"
          alt=""
          width={260}
          height={260}
          className="absolute left-0 top-[-1.2rem]"
        />
      </div>
      <Layout>
        <div>
          <p className="text-center text-white text-[40px] font-bold leading-[48px] mb-6 w-[63%] mx-auto">
            Join thousands of vendors and service providers making business
            seamless with SwapHub.
          </p>
          <div className="flex flex-col justify-center items-center">
            <Button variant={"primary"} className={"text-center w-fit"}>
              Get Started for Free
            </Button>
          </div>
        </div>
      </Layout>
      <div className="overflow-clip">
        <Image
          src="/assets/Home/images/1a.png"
          alt=""
          width={230}
          height={230}
          className="absolute right-0 top-0"
        />
      </div>
    </section>
  );
};

export default JoinUs;
