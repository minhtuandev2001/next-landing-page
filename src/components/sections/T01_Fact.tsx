type Props = {
  title: string;
  subTitle: string;
};
export default function T01_Fact({ cards }: { cards: Props[] } | any) {
  return (
    <div className="flex md:flex-wrap md:flex-row space-y-8 md:space-y-0 flex-col lg:max-w-screen-2xl md:items-start items-center mx-auto justify-around mt-20  w-full h-full p-1 after:border-b after:border-gray-200 after:relative after:top-[40px] after:max-w-[1920px] after:right-0 after:h-1 after:z-1 after:w-full ">
      {cards?.map((item: Props, index: number) => {
        return (
          <div
            key={index + 1}
            className=" max-w-[300px] w-full text-center p-2 space-y-4"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {item?.title}
            </h2>
            <p className="text-septenary">{item?.subTitle}</p>
          </div>
        );
      })}
    </div>
  );
}
