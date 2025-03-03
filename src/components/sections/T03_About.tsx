import { ImageType } from "@/constant/common";
import { generateMediaLink } from "@/utils/common";
import Image from "next/image";
import React from "react";
type Props = {
  title: string;
  description: string;
  thumbnail1: ImageType;
};
const T03_About = ({ thumbnail, title, description }: Props | any) => {
  return (
    <section className="py-6">
      <div className="flex flex-col-reverse md:flex-row">
        <Image
          src={generateMediaLink(thumbnail.link)}
          alt={thumbnail.alt}
          width={800}
          height={0}
          className="md:w-[40%] object-cover "
        />
        <div className="md:basis-3/5 flex items-center p-[3%] lg:p-[5%] 2xl:p-[10%]">
          <div className="w-[95%] lg:w-[85%] flex flex-col gap-y-10">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-primary">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default T03_About;
