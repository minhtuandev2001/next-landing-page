import Image from "next/image";
import React from "react";
type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  description: string;
  className: string;
};
const T03_CategoryCard = ({
  imageSrc,
  imageAlt,
  title,
  subTitle,
  ...rest
}: Props | any) => {
  return (
    <div className="flex h-[135px] gap-x-4 items-center">
      <Image src={imageSrc} alt={imageAlt} width={79} height={79} />
      <div className="flex flex-col gap-y-2">
        <p className="text-[21px] font-bold">{title}</p>
        <p className="text-primary text-[17px]">{subTitle}</p>
      </div>
    </div>
  );
};

export default T03_CategoryCard;
