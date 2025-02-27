"use client"; // Required for Next.js App Router

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/app/common/layout";
import HeadingWithSubHead from "@/app/common/headingWithSubHead";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "James Okwu",
      feedback:
        "Upload products or services with detailed descriptions, images, and pricing. Whether you're selling, trading, or bartering, SwapHub supports it all.",
      image: "/assets/image/5.png",
    },
    {
      name: "Adeyeye Sulaimon",
      feedback:
        "Upload products or services with detailed descriptions, images, and pricing. Whether you're selling, trading, or bartering, SwapHub supports it all.",
      image: "/assets/image/6.png",
    },
    {
      name: "Aisha Bello",
      feedback:
        "Upload products or services with detailed descriptions, images, and pricing. Whether you're selling, trading, or bartering, SwapHub supports it all.",
      image: "/assets/image/6.png",
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
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[white]">
      <Layout>
        <HeadingWithSubHead
          heading={"Customers Are Enjoying What Was Built For Them"}
          vaiant={"secondary"}
          className={"text-center mb-16 w-[60%] mx-auto max-md:w-full"}
        />

        {/* Slider */}
        <div className="mb-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="">
                <div className="border-[1.56px] mr-6 border-[#4A4A4A]  rounded-2xl p-6 grid md:grid-cols-2 items-center gap-x-6 gap-y-6 bg-[#ECE7FF] shadow-md max-md:p-3">
                  {/* Image Column */}
                  <div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={200}
                      height={200}
                      layout="responsive"
                    />
                  </div>

                  {/* Text Column */}
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="font-semibold text-2xl text-[#303030] font-recoletaBold">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#616161] text-lg">
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Layout>
    </section>
  );
}
