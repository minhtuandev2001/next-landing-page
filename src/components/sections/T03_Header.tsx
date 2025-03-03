"use client";
import { ImageType, LinkType } from "@/constant/common";
import { generateMediaLink } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  logo: ImageType;
  links: LinkType[];
  link: LinkType;
};
const T03_Header = ({ logo, links, link }: Props | any) => {
  const [onShow, setOnShow] = useState(false);
  return (
    <section className="bg-quaternary fixed top-0 left-0 right-0 z-50">
      <div className="relative container mx-auto flex justify-between items-center">
        <div className="flex items-center ">
          <div>
            <Image
              src={generateMediaLink(logo?.link)}
              alt={logo?.alt}
              width={70}
              height={70}
            />
          </div>
          <nav
            className={`${
              onShow ? "block" : "hidden"
            } absolute md:relative md:block right-[30px] md:right-0 bottom-[-120%] md:bottom-0 bg-quaternary md:bg-transparent`}
          >
            <ul className="text-base font-semibold text-primary flex flex-col md:flex-row gap-x-4 items-center ">
              {links.map((item: LinkType, index: number) => (
                <li key={index} className="px-10 py-2 md:px-0 md:py-0">
                  <a href={item?.link}>{item?.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex">
          <button className="font-semibold border-2 border-black rounded-[50px] px-7 py-1 hover:bg-black hover:text-white">
            <Link href={link.link}>{link.text}</Link>
          </button>
          <div
            className="px-5 py-3 md:hidden"
            onClick={() => setOnShow(!onShow)}
          >
            <Image
              src="/images/menu_icon.svg"
              alt="menu icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default T03_Header;
