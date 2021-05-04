import React, { useState } from "react";

export const NewSubtask = ({ onCreateSubtask }) => {
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCreateSubtask(title);
        setTitle("");
      }}
    >
      <div className="flex">
        <input
          type="text"
          className="w-2/3 border py-2 px-3 font-light"
          placeholder="What are the steps?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          disabled={!title.trim()}
          type="submit"
          className="w-1/3 uppercase text-xs text-white font-semibold py-2 px-3 bg-blue-600 disabled"
        >
          Add Step
        </button>
      </div>
    </form>
  );
};
