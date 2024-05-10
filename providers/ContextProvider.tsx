"use client";
import React, { createContext, useState } from "react";

export const WardIdContext = createContext<{
  wardId: string;
  setWardId: React.Dispatch<React.SetStateAction<string>>;
}>({ wardId: "0", setWardId: () => {} });

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wardId, setWardId] = useState("0");

  return (
    <WardIdContext.Provider value={{ wardId, setWardId }}>
      {children}
    </WardIdContext.Provider>
  );
};
