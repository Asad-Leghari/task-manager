import { ITask } from "../../domain";
import { ITaskDto } from "./dto";

const taskDtoToDomain = (dto: ITaskDto[]): ITask[] => {
  return dto.map((t) => ({
    id: t.id,
    author: t.author,
    title: t.title,
    description: t.description,
  }));
};

const taskTransformations = {
  taskDtoToDomain,
};

export default taskTransformations;
