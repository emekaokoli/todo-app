import { useEffect } from 'react';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import { useTasks } from './hooks/useTasks';
import { TaskContext } from './providers/TaskContext';
import RESTTaskService from './services/rest/RESTTaskService';
import { TaskService } from './services/TaskService';
import './styles.css';

export default function App() {
    const taskService = new TaskService(RESTTaskService);
    const { tasks, setTasks } = useTasks([]);

  useEffect( () => {
  
    async function tasks() {
        setTasks((await taskService.fetchAllTasks()) || []);
    }
    tasks();
  }, []);

  const actions = {
    async onCreateTask(title) {
      await taskService.createTask(title);

      setTasks([...(await taskService.fetchAllTasks())]);
    },
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
