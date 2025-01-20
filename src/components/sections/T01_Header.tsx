"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMenu, MdMenuOpen } from "react-icons/md";
import { useState } from "react";
import { ImageType, LinkType } from "@/constant/common";
import useVerticalScroll from "@/hook/useVerticalScroll";
import { generateMediaLink } from "@/utils/common";
type Props = {
  logo: ImageType;
  links: LinkType[];
  link: LinkType;
};
export default function T01_Header({ logo, links, link }: Props | any) {
  const scrollY = useVerticalScroll();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header
      className={`fixed top-0 left-0 z-40 max-w-screen-[1920px] w-full h-auto max-h-[100px] flex gap-6 justify-between md:justify-normal items-center py-4 lg:px-[5%] sm:px-[5%] px-[2%] text-sm md:text-base ${
        scrollY >= 1
          ? " bg-quaternary opacity-90 transition-all duration-300 ease-in-out"
          : "bg-transparent transition-all duration-300 ease-in-out"
      }`}
    >
      <div className="flex whitespace-nowrap items-center gap-4 w-[70px] h-auto  max-w-fit overflow-hidden flex-shrink-0">
        <Link href="/" className="w-full h-full object-cover">
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
      <div
        className="relative md:hidden size-7"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <MdOutlineMenu className="w-full h-auto" />
        ) : (
          <MdMenuOpen className="w-full h-auto" />
        )}
        <div
          className={`absolute ${
            isOpen ? "hidden" : "block"
          } bot-0 right-0  w-fit min-w-[200px] bg-white border border-gray-200 rounded-xl shadow-xl p-4`}
        >
          <ul className="text-center space-y-5 h-auto w-full">
            {links?.map((item: LinkType, index: number) => {
              return (
                <li key={index + 1}>
                  <Link
                    href={item?.link}
                    className={`font-sans text-denary font-medium sm:block hover:text-senary`}
                  >
                    {item?.text}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href={link?.link}>
            <div className="px-4 py-1 text-center sm:text-base text-sm border-t mt-2 border-t-tertiary">
              {link?.text}
            </div>
          </Link>
        </div>
      </div>
      <div className="md:flex md:flex-1 hidden justify-between items-center">
        <ul className="flex gap-8 justify-center items-center">
          {links?.map((item: LinkType, index: number) => {
            return (
              <li key={index + 1}>
                <Link
                  href={item?.link}
                  className={` font-sans text-denary font-medium sm:block hover:text-senary`}
                >
                  {item?.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Link href={link?.link}>
            <button className="px-4 py-1 sm:text-base text-sm border-2 border-tertiary hover:bg-tertiary  rounded-3xl hover:transition-colors hover:duration-500 hover:-translate-y-1 hover:text-gray-400 min-w-[120px]">
              {link?.text}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
