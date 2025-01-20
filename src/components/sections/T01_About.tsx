import { ImageType } from "@/constant/common";
import { generateMediaLink } from "@/utils/common";
import Image from "next/image";
type Props = {
  title: string;
  subTitle: string;
  thumbnail1: ImageType;
  thumbnail2: ImageType;
};
export default function T01_About({
  title,
  subTitle,
  thumbnail1,
  thumbnail2,
}: Props | any) {
  return (
    <div className="w-full flex justify-center pt-2 h-fit items-center  ">
      <div className="w-full flex justify-center h-full pt-10 lg:max-h-[672px] mb-[calc(100px+80px)] items-center px-8 bg-gradient-to-tr from-secondary to-primary ">
        <div className=" lg:max-w-screen-2xl w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:my-20 lg:px-16 mx-auto ">
          <div className="md:text-left text-center ld:max-w-[407px]  w-full space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
            <p className=" text-senary leading-loose font-sans">{subTitle}</p>
          </div>
          <div className="flex flex-col items-center  md:flex-row gap-10">
            <div className=" max-w-[502px] max-h-[600px] w-full h-fit  ">
              <Image
                className="rounded-xl transition duration-300 hover:shadow-2xl hover:-translate-y-3.5 lg:my-[70%]"
                alt={thumbnail1?.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={generateMediaLink(thumbnail1?.link)}
              />
            </div>
            <div className="max-w-[502px] max-h-[670px] w-full h-fit ">
              <Image
                className=" rounded-xl transition duration-300 hover:shadow-2xl hover:-translate-y-3.5"
                alt={thumbnail2?.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={generateMediaLink(thumbnail2?.link)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
