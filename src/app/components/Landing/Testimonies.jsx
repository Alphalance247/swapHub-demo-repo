"use client"; // Required for Next.js App Router

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "James Okwu",
      feedback:
        "Upload products or services with detailed descriptions, images, and pricing. Whether you're selling, trading, or bartering, SwapHub supports it all.",
      image: "/assets/image/okwu.png",
    },
    {
      name: "Adeyeye Sulaimon",
      feedback:
        "Upload products or services with detailed descriptions, images, and pricing. Whether you're selling, trading, or bartering, SwapHub supports it all.",
      image: "/assets/image/adeyeye.png",
    },
    {
      name: "Aisha Bello",
      feedback:
        "Selling online has never been easier! I love the simplicity and flexibility SwapHub provides.",
      image: "/assets/image/adeyeye.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-[260px] px-4">
      {/* Title */}
      <h2 className="text-3xl md:text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">
        Customers Are Enjoying What Was Built For Them
      </h2>

      {/* Slider */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2">
            <div className="w-[550px] h-[240px] border-[1.53px] border-gray-300 dark:border-gray-700 rounded-xl p-6 flex items-center gap-12 bg-[#ECE7FF] dark:bg-gray-900 shadow-md">
              {/* Image Column */}
              <div className="w-[200px] h-[200px]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={200}
                  height={200}
                  className="rounded-[12px] object-cover w-full h-full"
                />
              </div>

              {/* Text Column */}
              <div className="w-[280px] h-[212px] flex flex-col gap-[16px]">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {testimonial.name}
                </h3>
                <p className="w-[196px] h-[168px] text-gray-600 dark:text-gray-300 text-sm">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
