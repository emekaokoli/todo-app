// this function constructor acts as some sort of abstraction around the task API.
// this way, a memory, firebase, REST etc. task service can be provided at runtime.
export function TaskService({
  // fetch all parent tasks.
  fetchAllTasks,
  // fetch one parent task by id.
  fetchTaskById,
  // create a parent task.
  createTask,
  // update a parent task's status.
  updateTask,
  // delete a parent task by id.
  deleteTaskById,
  createSubtask,
  updateSubtask
}) {
  this.fetchAllTasks = fetchAllTasks;
  this.fetchTaskById = fetchTaskById;
  this.createTask = createTask;
  this.updateTask = updateTask;
  this.createSubtask = createSubtask;
  this.updateSubtask = updateSubtask;
  this.deleteTaskById = deleteTaskById;
}
