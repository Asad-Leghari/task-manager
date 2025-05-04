import { client } from "../client";
import { ITaskDto, ICreateTaskForm } from "./dto";

const createTask = async (formData: ICreateTaskForm) => {
  const res = await client.post<ITaskDto>("tasks/list-tasks/", formData);
  const data = res.data;
  return data;
};

const fetchAllTasks = async () => {
  const res = await client.get<ITaskDto[]>("tasks/list-tasks");
  const data = res.data;
  return data;
};

const taskApis = {
  createTask,
  fetchAllTasks,
};

export default taskApis;
