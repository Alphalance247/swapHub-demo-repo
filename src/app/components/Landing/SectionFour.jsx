import Layout from "@/app/common/layout";
import FeatureCard from "../../common/cards/SectionFourCard";
import HeadingWithSubHead from "@/app/common/headingWithSubHead";
import Button from "@/app/common/Button";

export default function FeaturesSection() {
  const features = [
    {
      title: "Effortless Setup",
      description:
        "No coding, no hassle. Easily create your online hub for products and services with just a few clicks.",
      image: "/setup-bg.jpg",
    },
    {
      title: "Multiple Ways to Sell",
      description:
        "Offer flexible payment options, including bartering, trading, and pay now, pay later—because business should be on your terms.",
      image: "/sell-bg.jpg",
    },
    {
      title: "Offer Buy Now, Pay Later",
      description:
        "Allow customers to purchase now and make payments over time. This makes high-end services and offerings more accessible.",
      image: "/buy-later-bg.jpg",
    },
    {
      title: "Your Brand, Your Identity",
      description:
        "Make your store truly yours, showcasing your products, services, and brand in a way that stands out.",
      image: "/brand-bg.jpg",
    },
    {
      title: "Effortless Setup",
      description:
        "Let customers browse, inquire, and purchase with ease. A smooth workflow means more success for you.",
      image: "/effortless-bg.jpg",
    },
  ];

  return (
    <section className="bg-white">
      <Layout>
        <HeadingWithSubHead
          heading={"Everything you’ve always wished for"}
          className={
            "mb-6 text-center w-[80%] mx-auto max-xl:w-[70%] max-lg:w-[90%] max-md:w-full"
          }
          vaiant={"secondary"}
          withSubHead={true}
          subHeadWidth={"w-[85%] mx-auto max-lg:w-[85%] max-md:w-[95%]"}
          subhead={
            "Your business, your rules, effortless selling, seamless trading, and more."
          }
        />

        {/* Features Grid */}
        <div className="grid gap-6 mt-16">
          {/* First Row: 2 Columns */}
          <div className="grid md:grid-cols-2 gap-[24px] border-gray-300">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))}
          </div>

          {/* Second Row: 3 Columns */}
          <div className="grid grid-cols-3 gap-[24px] border-gray-300 dark:border-gray-600 max-lg:grid-cols-2 max-md:grid-cols-1">
            {features.slice(2, 5).map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))}
          </div>
        </div>

        {/* Get Started Button (Aligned Left) */}
        <div className="mt-6">
          <Button variant={"primary"}> Get started</Button>
        </div>
      </Layout>
    </section>
  );
}
