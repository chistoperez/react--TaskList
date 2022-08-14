import React, { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState(data);

  const createTask = (newtask) => {
    setTask([
      ...task,
      {
        title: newtask.title,
        id: task.length,
        description: newtask.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    console.log(taskId);
    console.log(task);
    setTask(task.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ task, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
