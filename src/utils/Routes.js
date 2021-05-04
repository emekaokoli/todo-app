/* eslint-disable import/no-anonymous-default-export */
const apiBase = '/api/v1';

export default {
  tasks: {
    all: `${apiBase}/todo`,
    one: (id) => `${apiBase}/tasks/${id}`
  },

  subtasks: {
    all: (parentTaskId) => `${apiBase}/tasks/${parentTaskId}/subtask`,
    one: (parentTaskId, subtaskId) =>
      `${apiBase}/tasks/${parentTaskId}/subtasks/${subtaskId}`
  }
};
