import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import { useTasks } from "./hooks/useTasks";
import MemoryTaskService from "./services/memory/MemoryTaskService";
import { TaskContext } from "./providers/TaskContext";
import "./styles.css";
import { TaskService } from "./services/TaskService";

export default function App() {
  const taskService = new TaskService(MemoryTaskService);
  const { tasks, setTasks } = useTasks(taskService.fetchAllTasks());

  const actions = {
    onCreateTask(title) {
      taskService.createTask(title);

      setTasks([...taskService.fetchAllTasks()]);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, taskService }}>
      <div className="h-screen flex justify-center items-center">
        <div className="w-96 flex flex-col gap-6">
          <NewTask onCreateTask={actions.onCreateTask} />
          <Tasks />
        </div>
      </div>
    </TaskContext.Provider>
  );
}
