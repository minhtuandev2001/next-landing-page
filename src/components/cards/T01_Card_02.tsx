import Image from "next/image";
type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  description: string;
  className: string;
};
const T01_Card_02 = ({
  imageSrc,
  imageAlt,
  title,
  subTitle,
  description,
  className,
  ...rest
}: Props) => {
  return (
    <div
      className={`flex w-[350px] flex-col  gap-[24px] border border-vigenary items-start p-6 max-h-[352px] rounded-2xl overflow-hidden ${className}`}
    >
      <div>
        <div className="w-full rounded-full mb-4">
          <Image
            alt={imageAlt}
            width={50}
            height={50}
            quality={100}
            style={{ width: "100%", height: "auto" }}
            src={imageSrc}
          />
        </div>
      </div>
      <div className=" h-[75px]">
        <p className="text-start line-clamp-3">{description}</p>
      </div>
      {/* footer */}
      <div className="flex w-full items-center justify-between gap-2 mt-6 text-sm">
        <h3 className="whitespace-nowrap font-bold">{title}</h3>
        <p className=" text-septenary whitespace-nowrap">{subTitle}</p>
      </div>
    </div>
  );
};

export default T01_Card_02;
