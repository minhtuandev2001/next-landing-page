import { ImageType } from "@/constant/common";
import { generateMediaLink } from "@/utils/common";
import Image from "next/image";
import React from "react";
type Props = {
  title: string;
  subTitle: string;
  thumbnail: ImageType;
};
const T03_Review = ({ title, subTitle, thumbnail }: Props | any) => {
  return (
    <section
      className="flex justify-center py-28 z-40 w-full"
      style={{ background: "#787878" }}
    >
      <div className="w-[90%] xl:w-[80%] flex flex-col justify-center items-center gap-y-28">
        <div className="w-[95%] 2xl:w-[85%] text-center text-white flex flex-col gap-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
          <p className="text-[19px]">{subTitle}</p>
        </div>
        <div className="w-[320px] md:w-[650px] lg:w-[800px] h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={generateMediaLink(thumbnail.link)}
            alt={thumbnail.alt}
            width={864}
            height={502}
            style={{ height: "100%", width: "100%" }}
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default T03_Review;
