export type IAuthDto = {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
  };
  access: string;
  refresh: string;
};

export type IRegisterData = {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
};
