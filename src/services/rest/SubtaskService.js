import { handleRequest } from "../../utils/HttpHandler";
import routes from "../../utils/Routes";

// fetch all subtasks.
export const fetchAllSubtasks = (parentTaskId) =>
  handleRequest(() => fetch(routes.subtasks.all(parentTaskId)));

// fetch single subtask by id.
export const fetchSubtaskById = (
  { todo_id: parentTaskId, id: subtaskId } /* Subtask class type */
) => handleRequest(() => fetch(routes.subtasks.one(parentTaskId, subtaskId)));

// create new subtask.
export const createSubTask = ({ title, todo_id } /* Subtask class type */) =>
  handleRequest(() =>
    fetch(routes.subtasks.all(todo_id), {
      method: "post",
      body: JSON.stringify({
        title,
        todo_id
      })
    })
  );

// update a single subtask.
export const updateTask = (
  { id: subtaskId, todo_id: parentTaskId, status } /* Subtask class type */
) =>
  handleRequest(() =>
    fetch(routes.subtasks.one(parentTaskId, subtaskId), {
      method: "put",
      body: JSON.stringify({
        status
      })
    })
  );

// update a single subtask.
export const deleteTaskById = ({ id: subtaskId, todo_id: parentTaskId }) =>
  handleRequest(() =>
    fetch(routes.subtasks.one(parentTaskId, subtaskId), {
      method: "delete"
    })
  );
