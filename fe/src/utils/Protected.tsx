import React, { useEffect, useState } from "react";
import useGlobalCxt from "../hooks/useGlobalCxt";
import { useNavigate } from "react-router";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const [Loading, setLoading] = useState(true);
  const { user } = useGlobalCxt();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const user_s = localStorage.getItem("user");
    if (!user.user && user.setUser && user_s) {
      user.setUser(JSON.parse(user_s));
    }
  }, []);

  if (Loading) return <>Loading</>;

  return <>{children}</>;
};

export default Protected;
