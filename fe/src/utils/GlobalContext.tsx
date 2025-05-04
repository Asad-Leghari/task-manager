import React, { createContext, useState } from "react";
import { IUser } from "../domain/user";

type IGlobalCxt = {
  theme: {
    ActiveTheme: "light" | "dark";
    setActiveTheme?: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  };
  user: null | IUser;
};

export const GlobalCxt = createContext<IGlobalCxt>({
  theme: {
    ActiveTheme: "dark",
  },
  user: null,
});

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [ActiveTheme, setActiveTheme] = useState<"light" | "dark">("dark");
  const [User, setUser] = useState<IUser | null>(null);

  const value = {
    theme: {
      ActiveTheme,
      setActiveTheme,
    },
    user: User,
  };
  return <GlobalCxt.Provider value={value}>{children}</GlobalCxt.Provider>;
};

export default GlobalContext;
