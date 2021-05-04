const apiBase = "http://127.0.0.1:4000/api/v1";

export default {
  tasks: {
    all: `${apiBase}/tasks`,
    one: (id) => `${apiBase}/tasks/${id}`
  },

  subtasks: {
    all: (parentTaskId) => `${apiBase}/tasks/${parentTaskId}/subtasks`,
    one: (parentTaskId, subtaskId) =>
      `${apiBase}/tasks/${parentTaskId}/subtasks/${subtaskId}`
  }
};
