import React from "react";

export const SubtaskList = ({ subtasks, toggleSubtaskStatus }) => {
  return subtasks.map((subtask) => {
    return (
      <div className="bg-blue-500 text-white py-2 px-4" key={subtask.id}>
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={subtask.status === "completed"}
              onChange={() => toggleSubtaskStatus(subtask)}
            />
            {subtask.title}
          </label>
        </div>
      </div>
    );
  });
};
