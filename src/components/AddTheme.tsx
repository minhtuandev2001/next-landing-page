"use client";
import { handleColorChange } from "@/utils/common";
import React from "react";

export default function AddTheme({ theme }: { theme: any }) {
  if (theme) {
    handleColorChange(theme);
  }
  return <div></div>;
}
