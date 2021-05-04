import React, { useContext, useState } from "react";
import { TaskContext } from "../providers/TaskContext";
import { NewSubtask } from "./NewSubtask";
import { SubtaskList } from "./SubtaskList";

const TaskItemComponent = ({ task }) => {
  const { title, status, subtasks = [] } = task;
  const [expanded, setExpanded] = useState(false);
  const completedCount = subtasks.filter((t) => t.status === "completed")
    .length;
  const { setTasks, taskService } = useContext(TaskContext);

  const actions = {
    // parent task actions.
    async toggleParentTask() {
      await taskService.updateTask(task.id);

      setTasks(await taskService.fetchAllTasks());
    },

    // subtask actions.
    async onCreateSubtask(title) {
      await taskService.createSubtask(title, task);

      setTasks(await taskService.fetchAllTasks());
    },
    async toggleSubtaskStatus(subtask) {
      await taskService.updateSubtask({ id: subtask.id, todo_id: subtask.todo_id });

      setTasks(await taskService.fetchAllTasks());
    }
  };

  return (
    <div>
      <div className="bg-blue-600 text-white py-2 px-4 rounded">
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={status === "completed"}
              onChange={actions.toggleParentTask}
            />
            {title}
          </label>
        </div>
        <div
          className="gap-2 flex text-gray-300 text-sm justify-end items-center cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <span>
            {completedCount} of {subtasks.length} completed
          </span>
          {!expanded && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
          {expanded && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          )}
        </div>
      </div>
      {expanded && (
        <div className="px-6 animation-reveal">
          <SubtaskList
            subtasks={subtasks}
            toggleSubtaskStatus={actions.toggleSubtaskStatus}
          />
          <NewSubtask onCreateSubtask={actions.onCreateSubtask} />
        </div>
      )}
    </div>
  );
};

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskItemComponent task={task} key={task.id} />
      ))}
    </div>
  );
};
