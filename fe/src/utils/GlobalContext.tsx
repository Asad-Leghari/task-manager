import React, { createContext, useState } from "react";
import { IUser } from "../domain/user";

type IGlobalCxt = {
  theme: {
    ActiveTheme: "light" | "dark";
    setActiveTheme?: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  };
  user: {
    user: null | IUser;
    setUser?: React.Dispatch<React.SetStateAction<IUser | null>>;
  };
};

export const GlobalCxt = createContext<IGlobalCxt>({
  theme: {
    ActiveTheme: "dark",
  },
  user: {
    user: null,
  },
});

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [ActiveTheme, setActiveTheme] = useState<"light" | "dark">("dark");
  const [User, setUser] = useState<IUser | null>(null);

  const value = {
    theme: {
      ActiveTheme,
      setActiveTheme,
    },
    user: {
      user: User,
      setUser: setUser,
    },
  };

  return <GlobalCxt.Provider value={value}>{children}</GlobalCxt.Provider>;
};

export default GlobalContext;
