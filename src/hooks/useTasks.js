import { useState } from "react";

export const useTasks = (list) => {
  const [tasks, setTasks] = useState(list);

  return {
    tasks,
    setTasks
  };
};
