"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { ImageType } from "@/constant/common";
import { generateMediaLink } from "@/utils/common";

type Props = {
  title: string;
  subTitle: string;
  slider: string;
};

const T03_Banner = ({ subTitle, title, slider }: Props | any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    border: false,
  };
  return (
    <section
      className="mt-[65px] pt-10 pb-16 w-full "
      style={{
        background: "linear-gradient(73.14deg, #F6F2EF 4.46%, #FFFFFF 68.93%)",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-y-10">
        <div className="text-center w-3/4 xl:w-2/3 flex flex-col gap-y-3">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary uppercase">
            {title}
          </h1>
          <p className="text-primary">{subTitle}</p>
        </div>
        <div className="w-full">
          <Slider {...settings} className="flex">
            {slider.map((item: any, index: number) => (
              <div key={index} className="">
                <Image
                  src={generateMediaLink(item?.slides?.link)}
                  alt={item?.slides?.alt}
                  width={1000}
                  height={800}
                  className="object-cover rounded-xl mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default T03_Banner;
