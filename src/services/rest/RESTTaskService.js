import { handleRequest } from "../../utils/HttpHandler";
import routes from "../../utils/Routes";

// fetch all tasks.
export const fetchAllTasks = () => handleRequest(() => fetch(routes.tasks.all));

// fetch single task by id.
export const fetchTaskById = (id) =>
  handleRequest(() => fetch(routes.oneTask(id)));

// create new task.
export const createTask = ({ title }) =>
  handleRequest(() =>
    fetch(routes.tasks.all, {
      method: "post",
      body: JSON.stringify({
        title
      })
    })
  );

// update a single task.
export const updateTask = (id, { status }) =>
  handleRequest(() =>
    fetch(routes.tasks.one(id), {
      method: "put",
      body: JSON.stringify({
        status
      })
    })
  );

// update a single task.
export const deleteTaskById = (id) =>
  handleRequest(() =>
    fetch(routes.tasks.one(id), {
      method: "delete"
    })
  );
