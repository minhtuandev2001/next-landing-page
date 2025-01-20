import { ImageType } from "@/constant/common";
import { generateMediaLink } from "@/utils/common";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
type Props = {
  title: string;
  subTitle: string;
  cards: { title: string; subTitle: string }[];
  thumbnail: ImageType;
};
export default function T01_Support({
  title,
  subTitle,
  cards,
  thumbnail,
}: Props | any) {
  return (
    <div className="w-full flex justify-center items-center min-h-screen h-fit md:p-20 py-20 bg-gradient-to-tr from-secondary to-primary">
      <div className="max-w-screen-2xl md:mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 mx-4 px-4 ">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="md:text-3xl text-2xl font-bold">{title}</h1>
            <p className="text-quinary">{subTitle}</p>
          </div>
          {cards?.map(
            (item: { title: string; subTitle: string }, index: number) => {
              return (
                <div key={index + 1} className="flex flex-row gap-4">
                  <span className="min-w-[24px] h-[24px] md:text-2xl text-lg text-black bg-white rounded-full flex items-center justify-center">
                    <FaCheck size={16} />
                  </span>
                  <div className="space-y-8">
                    <h2 className="text-lg  font-medium">{item?.title}</h2>
                    <p className="text-quinary text-sm md:text-base leading-relaxed">
                      {item?.subTitle}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="flex md:justify-end items-start justify-center mt-10 md:mt-0">
          <div className="sm:w-2/3 w-full rounded-2xl transition duration-300 hover:shadow-2xl hover:-translate-y-3.5">
            <Image
              alt={thumbnail?.alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={generateMediaLink(thumbnail?.link)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
