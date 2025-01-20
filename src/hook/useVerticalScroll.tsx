"use client";
import { useState, useEffect } from "react";

const useVerticalScroll = (ref?: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = ref?.current ? ref.current.scrollTop : window.scrollY; // Lấy vị trí cuộn
      setScrollPosition(position);
    };

    const element = ref?.current || window; // Dùng ref hoặc window
    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return scrollPosition;
};

export default useVerticalScroll;
