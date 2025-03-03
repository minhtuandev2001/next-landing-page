import React from "react";
import T03_FooterMenu from "../cards/T03_FooterMenu";

type Props = {
  logo: string;
  description: string;
  footerCols: any[];
};
const T03_Footer = ({ logo, description, footerCols }: Props | any) => {
  return (
    <section
      className="text-white p-6 sm:p-8 lg:p-16"
      style={{ background: "#161C2D" }}
    >
      <div className="border-b-2 px-0 md:px-10 py-10 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-8">
          <div className="col-span-2 flex flex-col gap-y-6 pr-10">
            <h1 className="text-[28px] font-bold">{logo}</h1>
            <p className="text-[15px] font-bold text-primary">{description}</p>
          </div>
          {footerCols.map((item: any, index: number) => (
            <T03_FooterMenu key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default T03_Footer;
