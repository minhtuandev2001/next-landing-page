import React from "react";
import T03_StoryCard from "../cards/T03_StoryCard";
import { generateMediaLink } from "@/utils/common";
type Props = {
  title: string;
  subTitle: string;
  cards: any;
};
const T03_Story = ({ title, subTitle, cards }: Props | any) => {
  return (
    <section className="flex justify-center py-20">
      <div className="w-[90%] xl:w-[75%] flex flex-col gap-y-16 items-center">
        <div className="text-center flex flex-col gap-y-6 w-[95%] lg:w-[60%]">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-[19px] text-primary">{subTitle}</p>
        </div>

        <div className="flex justify-center md:justify-between w-full flex-wrap lg:flex-nowrap gap-y-14 gap-x-4">
          {cards.map((item: any, index: number) => (
            <T03_StoryCard
              key={index}
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
    </section>
  );
};

export default T03_Story;
