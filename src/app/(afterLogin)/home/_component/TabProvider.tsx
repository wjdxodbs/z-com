"use client";

import { ReactNode, createContext, useState } from "react";

export const TabContext = createContext({
  tab: "rec",
  setTab: (value: "rec" | "foll"): void => {},
});

interface Props {
  children: ReactNode;
}

const TabProvider = ({ children }: Props) => {
  const [tab, setTab] = useState("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
