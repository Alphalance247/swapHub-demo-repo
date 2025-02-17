import FeatureCard from "../../common/cards/SectionFourCard"; 

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
    <div className="max-w-[1200px] mx-auto py-10 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center">
        Everything you’ve always wished for
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
        Your business, your rules, effortless selling, seamless trading, and more.
      </p>

      {/* Features Grid */}
      <div className="grid gap-6 mt-8">
        {/* First Row: 2 Columns */}
        <div
          className="grid md:grid-cols-2 gap-[24px] border-gray-300 dark:border-gray-600 pb-6"
          style={{ width: "1200px", height: "400px" }}
        >
          {features.slice(0, 2).map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              customStyles={{
                width: "588px",
                height: "400px",
                borderRadius: "16px",
                padding: "40px",
                gap: "16px",
              }}
            />
          ))}
        </div>

        {/* Second Row: 3 Columns */}
        <div
          className="grid md:grid-cols-3 gap-[16px] border-gray-300 dark:border-gray-600 pl-6"
          style={{ width: "1200px", height: "400px" }}
        >
          {features.slice(2, 5).map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              customStyles={{
                width: "384px",
                height: "400px",
                borderRadius: "16px",
                padding: "40px",
                gap: "16px",
                borderRightWidth: "4px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Get Started Button (Aligned Left) */}
      <div className="mt-6 text-left">
        <button className="px-6 py-2 border border-gray-700 dark:border-gray-300 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          Get started
        </button>
      </div>
    </div>
  );
}