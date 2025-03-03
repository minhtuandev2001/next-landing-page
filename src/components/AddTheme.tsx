"use client";
import { handleColorChange } from "@/utils/common";
import React, { useEffect } from "react";

export default function AddTheme({ theme }: { theme: any }) {
  useEffect(() => {
    if (theme) {
      handleColorChange(theme);
    }
  }, [theme]);
  return <div></div>;
}
