import { ImageType } from "@/constant/common";
import T01Card01 from "../cards/T01_Card_01";
import { generateMediaLink } from "@/utils/common";
type Props = {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    subTitle: string;
    thumbnail: ImageType;
  }[];
};
export default function T01_Service({ title, subTitle, cards }: Props | any) {
  return (
    <div className="max-w-screen-xl mx-auto space-y-14 text-center mt-20 pb-20">
      <div className="space-y-5">
        <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
        <p className="text-septenary">{subTitle}</p>
      </div>
      <div className="flex md:flex-row flex-col flex-wrap w-full justify-around">
        {cards?.map(
          (
            item: {
              title: string;
              subTitle: string;
              thumbnail: ImageType;
            },
            index: number
          ) => {
            return (
              <T01Card01
                key={index + 1}
                imageSrc={generateMediaLink(item?.thumbnail?.link)}
                imageAlt={item?.thumbnail?.alt}
                title={item?.title}
                description={item?.subTitle}
                className={`transition duration-300 hover:-translate-y-3.5`}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
