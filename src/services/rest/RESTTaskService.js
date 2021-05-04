import { handleRequest } from '../../utils/HttpHandler';
import routes from '../../utils/Routes';
import { TaskService } from '../TaskService';

export default new TaskService({
  // fetch all tasks.
  fetchAllTasks: () => handleRequest(() => fetch(routes.tasks.all)),
  // fetch single task by id.
  fetchTaskById: (id) => handleRequest(() => fetch(routes.oneTask(id))),
  // create new task.
  createTask: (title) =>
    handleRequest(() =>
      fetch(routes.tasks.all, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          title,
        }),
      }),
    ),
  // update a single task.
  updateTask: (id, data) =>
    handleRequest(() =>
      fetch(routes.tasks.one(id), {
        method: 'put',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          status: data && data.status,
        }),
      }),
    ),
  // update a single task.
  deleteTaskById: (id) =>
    handleRequest(() =>
      fetch(routes.tasks.one(id), {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }),
    ),

  // fetch all subtasks.
  fetchAllSubtasks: (parentTaskId) =>
    handleRequest(() => fetch(routes.subtasks.all(parentTaskId))),

  // fetch single subtask by id.
  fetchSubtaskById: (
    { todo_id: parentTaskId, id: subtaskId } /* Subtask class type */,
  ) => handleRequest(() => fetch(routes.subtasks.one(parentTaskId, subtaskId))),

  // create new subtask.
  createSubtask: (title, task /* Subtask class type */) =>
    handleRequest(() =>
      fetch(routes.subtasks.all(task.id), {
        method: 'post',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ title }),
      }),
    ),

  // update a single subtask.
  updateSubtask: (
    { id: subtaskId, todo_id: parentTaskId, status } /* Subtask class type */,
  ) =>
    handleRequest(() =>
      fetch(routes.subtasks.one(parentTaskId, subtaskId), {
        method: 'put',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          status,
        }),
      }),
    ),

  // update a single subtask.
  deleteSubtaskById: ({ id: subtaskId, todo_id: parentTaskId }) =>
    handleRequest(() =>
      fetch(routes.subtasks.one(parentTaskId, subtaskId), {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }),
    ),
});
