import { Subtask, Task } from '../../models/Task';
import { TaskService } from '../TaskService';
import { tasks } from './TaskMock';

const taskList = [...tasks];

let autoId = 1001;

export default new TaskService({
  fetchAllTasks: () => Promise.resolve(taskList),
  fetchTaskById: (id) => Promise.resolve(taskList.find((t) => t.id === id)),
  createTask: (title) =>
    Promise.resolve(
      taskList.push(new Task({ title, created_at: new Date(), id: autoId++ })),
    ),
  updateTask(id, data) {
    const task = this.fetchTaskById(id);

    if (task != null) {
      // if a status was provided, use it. Else, do a toggle of the status.
      if (data != null && !!data.status) {
        task.status = data.status;
      } else {
        if (task.status === 'pending') task.status = 'completed';
        else task.status = 'pending';

        // check if all the new status is "completed". If so, complete all subtasks.
        task.subtasks.forEach((sub) => (sub.status = task.status));
      }
    }

    return Promise.resolve();
  },
  deleteTaskById: (id) => {
    // find the index of the task, whose "id" matches the "id" parameter.
    const taskIndex = taskList.findIndex((t) => t.id === id);

    // if task was found.
    if (taskIndex !== -1) {
      // start removing from "taskIndex", then remove only one item.
      taskList.splice(taskIndex, 1);
    }
    return Promise.resolve();
  },
  createSubtask: (title, task) => {
    const maxId = Math.max(...task.subtasks.map((t) => t.id));
    task.subtasks.push(new Subtask({ title, todo_id: task.id, id: maxId + 1 }));
    task.status = 'pending'; // update parent task status to "pending", since new subtask is pending by default.
    return Promise.resolve(task);
  },
  updateSubtask(subtask) {
    const parentTask = this.fetchTaskById(subtask.todo_id);

    if (!!parentTask) {
      const isAllCompleted = () =>
        parentTask.subtasks.every((sub) => sub.status === 'completed');

      // toggle subtask.
      if (subtask.status === 'pending') subtask.status = 'completed';
      else subtask.status = 'pending';

      // check if all the subtasks are completed. If so, complete the parent task.
      if (isAllCompleted()) parentTask.status = 'completed';
      else parentTask.status = 'pending';
    }
    return Promise.resolve();
  },
});
