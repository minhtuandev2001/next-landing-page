import React from "react";
import T03_CategoryCard from "../cards/T03_CategoryCard";
import { generateMediaLink } from "@/utils/common";
type Props = {
  title: string;
  subTitle: string;
  cards: any;
};
const T03_Categorys = ({ title, subTitle, cards }: Props | any) => {
  return (
    <section className="py-12">
      <div className="container mx-auto flex justify-center">
        <div className="w-[90%] 2xl:w-[70%] flex flex-col gap-y-20">
          <div className="text-center">
            <p className="text-[13px] text-secondary uppercase font-bold">
              {title}
            </p>
            <h1 className="font-bold text-4xl">{subTitle}</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10 xl:gap-y-6">
            {cards.map((item: any, index: number) => (
              <T03_CategoryCard
                key={index + 1}
                imageSrc={
                  item?.thumbnail?.link
                    ? generateMediaLink(item?.thumbnail?.link)
                    : ""
                }
                imageAlt={item?.thumbnail?.alt}
                title={item?.title}
                subTitle={item.subTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default T03_Categorys;
