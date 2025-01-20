import { ImageType, LinkType } from "@/constant/common";
import { generateMediaLink } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
type Props = {
  logo: ImageType;
  description: string;
  footerCols: {
    title: string;
    links: LinkType[];
  }[];
};
export default function T01_Footer({
  logo,
  description,
  footerCols,
}: Props | any) {
  return (
    <div className="w-full  p-[16px] sm:p-[32px] md:p-[64px] lg:p-[130px] ">
      <div className="max-w-screen-2xl mx-auto flex md:flex-row lg:items-center items-start justify-start flex-col flex-wrap lg:flex-nowrap gap-8 lg:justify-around">
        <div className="flex flex-col justify-start gap-4">
          <div className="w-[75px] h-auto">
            <Link href={"/"}>
              <Image
                alt={logo?.alt}
                src={generateMediaLink(logo?.link)}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </div>
          <p className="max-w-[300px] w-full font-sans ">{description}</p>
        </div>
        <div className="flex w-full lg:justify-around justify-between sm:flex-wrap flex-col sm:flex-row gap-8">
          {footerCols?.map(
            (
              item: {
                title: string;
                links: LinkType[];
              },
              index: number
            ) => {
              return (
                <div key={index + 1} className="space-y-6">
                  <h4 className="text-sm font-medium text-septenary ">
                    {item.title}
                  </h4>
                  <div className="space-y-4">
                    {item?.links?.map((item, index) => {
                      return (
                        <div
                          key={index + 1}
                          className="text-sm hover:text-senary"
                        >
                          <a href={item?.link}>{item?.text}</a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
