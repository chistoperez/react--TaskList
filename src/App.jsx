import TaskFom from "./components/TaskFom";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskFom />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
