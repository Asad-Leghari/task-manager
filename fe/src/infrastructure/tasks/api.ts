import { client } from "../client";
import { ICreateTaskDto, ICreateTaskForm } from "./dto";

const createTask = async (formData: ICreateTaskForm) => {
  const res = await client.post<ICreateTaskDto>("tasks/list-tasks/", formData);
  const data = res.data;
  return data;
};

const taskApis = {
  createTask,
};

export default taskApis;
