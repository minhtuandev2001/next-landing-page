import Link from "next/link";
import React from "react";

const T03_FooterMenu = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-y-6">
      <p className="text-primary">{data?.title}</p>
      <ul className="flex flex-col gap-y-2 ">
        {data?.links?.map((item: any, index: number) => (
          <li key={index}>
            <Link className="" href={item?.link}>
              {item?.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default T03_FooterMenu;
