import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { task, deleteTask } = useContext(TaskContext);
  if (task.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">No Tasks</h1>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2 ">
      {task.map((t) => (
        <TaskCard key={t.id} task={t} />
      ))}
    </div>
  );
};

export default TaskList;
