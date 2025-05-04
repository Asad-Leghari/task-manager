import { base } from "../client";
import { IAuthDto, IRegisterData } from "./dto";

const register = async (data: IRegisterData) => {
  const res = await base.post<IAuthDto>("auth/register/", data);
  const result = res.data;
  return result;
};

const authApis = {
  register,
};

export default authApis;
