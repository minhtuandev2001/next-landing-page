import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  description: string;
  className: string;
};
const T03_StoryCard = ({
  imageSrc,
  imageAlt,
  title,
  subTitle,
  ...rest
}: Props | any) => {
  return (
    <div className="w-[300px] lg:w-[280px] xl:w-[310px] 2xl:w-[350px] flex flex-col gap-y-4">
      <p className="text-[21px] font-bold">{title}</p>
      <div className="h-[248px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={350}
          height={0}
          style={{ height: "100%", width: "100%" }}
          className="object-cover rounded-[10px]"
        />
      </div>
      <p className="text[17px] text-primary">{subTitle}</p>
      <Link
        href="#"
        className="flex items-center gap-x-6 text-tertiary hover:text-tertiary/80"
      >
        <span className="font-bold">Go to page</span>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default T03_StoryCard;
