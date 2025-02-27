import Layout from "@/app/common/layout";
import Card from "../../common/cards/SectionTwoCard";
import HeadingWithSubHead from "@/app/common/headingWithSubHead";

const cardData = [
  {
    title: "Sell Products and Services Effortlessly anytime and anywhere.",
    description:
      "Turn your products and services into a seamless online experience for customers.",
    image: "/assets/image/sellproduct.png",
  },
  {
    title: "Sell Products and Services Effortlessly anytime and anywhere.",
    description:
      "Turn your products and services into a seamless online experience for customers.",
    image: "/assets/image/sellproduct.png",
  },
  {
    title: "Sell Products and Services Effortlessly anytime and anywhere.",
    description:
      "Turn your products and services into a seamless online experience for customers.",
    image: "/assets/image/sellproduct.png",
  },
  {
    title: "Sell Products and Services Effortlessly anytime and anywhere.",
    description:
      "Turn your products and services into a seamless online experience for customers.",
    image: "/assets/image/sellproduct.png",
  },
];

export default function SectionTwoComponent() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto transition-colors duration-300">
        <HeadingWithSubHead
          heading={
            "SwapHub combines innovation and simplicity to bring your business online."
          }
          withSubHead={false}
          vaiant={"secondary"}
          className={"w-[80%] mx-auto mb-16 text-center"}
        />

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card?.title}
              description={card?.description}
              image={card?.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
