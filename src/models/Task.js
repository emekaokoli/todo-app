export function Task({
  id = null,
  title = "",
  subtasks = [],
  status = "pending",
  created_at = null
}) {
  if (typeof title !== "string") {
    throw new Error("'title' must be a string");
  } else if (!["pending", "completed"].includes(status)) {
    throw new Error("'status' must be one of ['pending', 'completed']");
  } else if (!Array.isArray(subtasks)) {
    throw new Error("'subtasks' must be an array");
  }

  this.id = id;
  this.title = title;
  this.subtasks = subtasks;
  this.status = status;
  // date, assigned on the server at creation.
  this.created_at = created_at;
}

export function Subtask({ todo_id = null, ...rest }) {
  
  Object.assign(this, new Task({ ...rest }));
  this.todo_id = todo_id;
}
