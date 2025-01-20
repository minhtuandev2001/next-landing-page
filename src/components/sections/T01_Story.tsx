import { ImageType, LinkType } from "@/constant/common";
import { generateMediaLink } from "@/utils/common";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
type Props = {
  title: string;
  thumbnail: ImageType;
  description: string;
  link: LinkType;
};
export default function T01_Story({
  title,
  thumbnail,
  description,
  link,
}: Props | any) {
  return (
    <div className="md:px-20 lg:py-0 px-4 h-fit min-h-screen max-w-screen-2xl mx-auto text-center lg:mt-64 mt-10 mb-20 space-y-20">
      <h1 className="text-2xl md:text-3xl  text-duodenary font-medium">
        {title}
      </h1>
      <div className="grid lg:grid-cols-[4fr_5fr] grid-cols-1 md:gap-16 gap-8">
        <div className="max-w-[630px] max-h-[630px] mx-auto w-[90%] h-fit transition-transform duration-300 hover:shadow-2xl hover:-translate-y-3.5">
          <Image
            alt={thumbnail?.alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src={generateMediaLink(thumbnail?.link)}
          />
        </div>
        <div className="flex flex-col mt-10 lg:mt-0 gap-20 justify-end lg:text-left text-center p-8 pt-0">
          <p className="text-octonary leading-loose text-left">{description}</p>
          <div>
            <a
              href={link?.link}
              target="_blank"
              className="flex justify-between items-center  md:py-3  py-2 px-4 sm:min-w-[214px] sm:mx-auto lg:mx-0  sm:w-fit w-full text-center text-quaternary bg-nonary hover:bg-denary opacity-80 rounded-lg transition-colors hover:duration-500 hover:ease-in-out"
            >
              {link?.text}
              <span>
                <GoArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
