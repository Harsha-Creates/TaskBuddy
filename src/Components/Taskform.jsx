import { useState } from 'react';

export default function Taskform({ addTask }) {
    const[task, setTask] = useState('');
    const[priority, setPriority] = useState('medium');
    const[category, setCategory] = useState('general');

    const handlesubmit = (e) => {
        e.preventDefault();
           if (task.trim() === "") {
        alert("Please enter a task");
        return;
    }
    
        addTask({text: task, priority,category, completed: false});
        //reset
        setTask("");
        setPriority("medium");
        setCategory("general");
    }
  return (
  <form onSubmit={handlesubmit} className = "task-form">
    <div id = "input">
        <input type="text" placeholder="Enter a task..." value={task} onChange={(e) => setTask(e.target.value)} />
        
        <span><button type="submit">Add Task</button></span>
        <h2>{task} {priority} {category}</h2>
    </div>

    <div id='btns'>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="general">General</option>
            <option value="personal">Personal</option>
            <option value="student">Student</option>
            <option value="work">Work</option>
        </select>
    </div>
    
  </form>
  );
    }
