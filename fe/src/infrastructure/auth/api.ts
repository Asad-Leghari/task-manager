import { base } from "../client";
import { IAuthDto, IRegisterData } from "./dto";

const register = async (data: IRegisterData) => {
  const res = await base.post<IAuthDto>("auth/register/", data);
  const result = res.data;
  return result;
};

const login = async (username: string, password: string) => {
  const res = await base.post<IAuthDto>("auth/login/", { username, password });
  const result = res.data;
  return result;
};

const authApis = {
  register,
  login,
};

export default authApis;
