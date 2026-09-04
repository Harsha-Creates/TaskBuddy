import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import {useEffect, useState} from "react";

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
}, [darkMode]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
  <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Task Buddy</h1>
      <p><i>Manage Tasks with Ease</i></p>
      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks} updateTask = {updateTask} deleteTask = {deleteTask} />
      <Progresstracker tasks = {tasks} />
      {tasks.length>0 && (<button className = 'clear-btn' onClick = {clearTasks}>clear All Tasks</button>)}
     
    </div>
  )
}



