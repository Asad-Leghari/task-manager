import React, { createContext, useState } from "react";
import { IUser } from "../domain/user";
import { ITask } from "../domain";

type IGlobalCxt = {
  theme: {
    ActiveTheme: "light" | "dark";
    setActiveTheme?: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  };
  user: {
    user: null | IUser;
    setUser?: React.Dispatch<React.SetStateAction<IUser | null>>;
  };
  tasks: {
    AllTasks: ITask[];
    setAllTasks?: React.Dispatch<React.SetStateAction<ITask[]>>;
  };
};

export const GlobalCxt = createContext<IGlobalCxt>({
  theme: {
    ActiveTheme: "dark",
  },
  user: {
    user: null,
  },
  tasks: {
    AllTasks: [],
  },
});

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [ActiveTheme, setActiveTheme] = useState<"light" | "dark">("dark");
  const [User, setUser] = useState<IUser | null>(null);
  const [AllTasks, setAllTasks] = useState<ITask[]>([]);

  const value = {
    theme: {
      ActiveTheme,
      setActiveTheme,
    },
    user: {
      user: User,
      setUser: setUser,
    },
    tasks: {
      AllTasks,
      setAllTasks,
    },
  };

  return <GlobalCxt.Provider value={value}>{children}</GlobalCxt.Provider>;
};

export default GlobalContext;
