export type ITask = {
  id: number;
  author: {
    first_name: string;
    last_name: string;
    username: string;
  };
  title: string;
  description: string;
};
