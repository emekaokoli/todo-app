import React, { useState } from "react";

export const NewTask = ({ onCreateTask }) => {
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCreateTask(title);
        setTitle("");
      }}
    >
      <div className="flex gap-2">
        <input
          type="text"
          className="w-2/3 border rounded py-2 px-3 font-light"
          placeholder="What to do?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          disabled={!title.trim()}
          type="submit"
          className="w-1/3 uppercase text-xs text-white font-semibold py-2 px-3 bg-blue-600 disabled rounded"
        >
          Create List
        </button>
      </div>
    </form>
  );
};
