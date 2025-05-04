import React, { createContext, useState } from "react";

type IGlobalCxt = {
  theme: {
    ActiveTheme: "light" | "dark";
    setActiveTheme?: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  };
};

export const GlobalCxt = createContext<IGlobalCxt>({
  theme: {
    ActiveTheme: "dark",
  },
});

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [ActiveTheme, setActiveTheme] = useState<"light" | "dark">("dark");

  const value = {
    theme: {
      ActiveTheme,
      setActiveTheme,
    },
  };
  return <GlobalCxt.Provider value={value}>{children}</GlobalCxt.Provider>;
};

export default GlobalContext;
