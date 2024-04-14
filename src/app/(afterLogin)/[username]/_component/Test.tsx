"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Test() {
  const pathname = usePathname();
  console.log(pathname);
  return <div>Test</div>;
}
