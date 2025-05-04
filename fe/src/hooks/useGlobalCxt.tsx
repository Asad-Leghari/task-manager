import { useContext } from "react";
import { GlobalCxt } from "../utils/GlobalContext";

const useGlobalCxt = () => {
  const cxt = useContext(GlobalCxt);
  if (!cxt) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return cxt;
};

export default useGlobalCxt;
