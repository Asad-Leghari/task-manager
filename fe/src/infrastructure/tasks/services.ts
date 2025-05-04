import taskApis from "./api";
import taskTransformations from "./transformations";

const fetchAllTasks = async () => {
  const dto = await taskApis.fetchAllTasks();
  const data = taskTransformations.taskDtoToDomain(dto);
  return data;
};

const taskServices = {
  fetchAllTasks,
};

export default taskServices;
