import { ImageType } from "@/constant/common";
import T01Card02 from "../cards/T01_Card_02";
import { generateMediaLink } from "@/utils/common";
type Props = {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    subTitle: string;
    description: string;
    thumbnail: ImageType;
  }[];
};
export default function T01_Team({ title, subTitle, cards }: Props | any) {
  return (
    <div className="w-full py-20 px-2">
      <div className="max-w-screen-xl mx-auto text-center gap-6">
        <div className="lg:max-w-[30%] md:max-w-[60%] mx-auto space-y-4">
          <h1 className="md:text-3xl text-2xl  font-bold font-sans ">
            {title}
          </h1>
          <p className="text-septenary">{subTitle}</p>
        </div>
        <div className="flex md:flex-row flex-col max-w-screen-xl  mx-auto flex-wrap md:justify-evenly items-center gap-8 md:space-y-0 space-y-8 pt-12 ">
          {cards?.map(
            (
              item: {
                title: string;
                subTitle: string;
                description: string;
                thumbnail: ImageType;
              },
              index: number
            ) => {
              return (
                <T01Card02
                  key={index + 1}
                  imageSrc={generateMediaLink(item?.thumbnail?.link)}
                  imageAlt={item?.thumbnail?.alt}
                  title={item?.title}
                  subTitle={item.subTitle}
                  description={item?.description}
                  className={`transition duration-300 hover:shadow-xl`}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
