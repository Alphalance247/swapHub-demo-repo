import Card from "../../common/cards/SectionTwoCard"; 

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
    <div className="max-w-6xl mx-auto py-10 px-4 transition-colors duration-300">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
        SwapHub combines innovation and simplicity to bring your business online.
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}
