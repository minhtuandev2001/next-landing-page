import Image from "next/image";
type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  className: string;
};
const T01_Card_01 = ({
  imageSrc,
  imageAlt,
  title,
  description,
  className,
  ...rest
}: Props) => {
  return (
    <div
      className={`flex max-w-[350px] w-full max-h-[570px] h-auto flex-col mx-auto items-center justify-center p-4 mb-4 rounded-2xl overflow-hidden ${className}`}
    >
      <div>
        <div className="w-full">
          <Image
            alt={imageAlt}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-2xl "
            style={{ width: "100%", height: 470 }}
            src={imageSrc}
          />
        </div>
      </div>
      {/* footer */}
      <div className="text-center w-full mt-6 space-y-2">
        <h3 className="sm:text-lg md:text-xl line-clamp-2">{title}</h3>
        <p className="text-sm text-septenary line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default T01_Card_01;
