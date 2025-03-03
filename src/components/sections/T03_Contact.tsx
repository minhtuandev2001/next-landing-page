import { ImageType, LinkType } from "@/constant/common";
import { generateMediaLink } from "@/utils/common";
import Link from "next/link";
import React from "react";
type Props = {
  background: ImageType;
  title: string;
  link: string;
  contact_own: {
    text: string;
    content: string;
  }[];
  description: string;
  contact_media: LinkType[];
};
const T03_Contact = ({
  background,
  title,
  link,
  contact_own,
  description,
  contact_media,
}: Props | any) => {
  return (
    <section
      className="h-[1000px] w-full flex justify-center items-center"
      style={{
        background: `url(${generateMediaLink(
          background.link
        )}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-center text-white flex flex-col max-w-[90%] md:max-w-[60%] gap-y-6">
        <div>
          <Link
            href={link}
            className="bg-white hover:bg-black text-black hover:text-white text-[17px] font-bold px-8 py-2 rounded-lg"
          >
            <span className="font-bold">Contact Us</span>
          </Link>
        </div>
        <p className="font-bold text-3xl">{title}</p>
        <div>
          {contact_own.map((item: any, index: number) => (
            <p key={index}>
              {item.text} {item.content}
            </p>
          ))}
          <p>{description}</p>

          {contact_media.map((item: any, index: number) => (
            <div className="flex flex-col" key={index}>
              <Link href={item?.link}>{item?.text}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default T03_Contact;
