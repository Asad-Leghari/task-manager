export type ICreateTaskForm = {
  title: string;
  description: string;
};

export type ICreateTaskDto = {
  author: {
    first_name: string;
    last_name: string;
    username: string;
  };
  title: string;
  description: string;
};
