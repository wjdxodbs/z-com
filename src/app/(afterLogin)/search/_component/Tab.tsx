"use client";

import style from "../search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Tab = () => {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
