"use client";
import { generateMediaLink } from "@/utils/common";
import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
type Props = {
  title: string;
  subTitle: string;
  videoBanner: string;
};
export default function T01_Banner({
  title,
  subTitle,
  videoBanner,
}: Props | any) {
  const [isPause, setIsPause] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlayVideo = () => {
    setIsPause(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handlePauseVideo = () => {
    setIsPause(true);
  };
  return (
    <div className="w-full h-fit bg-gradient-to-tr from-secondary to-primary flex py-[23%] md:py-[16%] lg:py-[9%] sm:py-[16%]  px-2 justify-center ">
      <div className="lg:max-w-[1172px] mx-auto text-center space-y-4 ">
        <h1 className={`md:text-3xl text-2xl lg:text-5xl font-semibold`}>
          {title}
        </h1>
        <p className={`text-quinary font-medium p-2 font-sans`}>{subTitle}</p>
        <div className=" relative max-w-screen-lg flex w-full bg-black mx-auto lg:h-[572px] object-contain h-fit justify-center items-center overflow-hidden rounded-2xl shadow-[rgba(0,0,0,0.3)_0px_8px_20px] ">
          <video
            ref={videoRef}
            controls
            onPlay={handlePlayVideo}
            onClick={handlePlayVideo}
            onPause={handlePauseVideo}
            className="w-full h-full rounded-2xl"
          >
            <source src={generateMediaLink(videoBanner)} type="video/mp4" />
          </video>
          {isPause && (
            <div
              onClick={handlePlayVideo}
              className="absolute pointer-events-none top-0 right-0 z-10 w-full h-full bg-stone-800/20 transition-colors duration-300"
            >
              <div className=" absolute top-[50%]  right-[50%] translate-x-[50%] -translate-y-[50%] flex items-center justify-center bg-primary  active:bg-primary/90 size-[100px] transaction duration-300 ease-in-out cursor-pointer rounded-full z-20 pointer-events-auto">
                <div className=" flex items-center justify-center size-[80px] bg-slate-100/90 rounded-full pointer-events-auto">
                  <div className="flex justify-center items-center size-[60px] transition-all duration-300 ease-in-out hover:scale-125 bg-white rounded-full pointer-events-auto">
                    <span className="size-9 bg-red-600 p-2 rounded-md pointer-events-auto">
                      <FaPlay
                        className="text-white pointer-events-auto"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
