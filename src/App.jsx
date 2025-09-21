import { useState, useEffect } from 'react';
import Title from './components/Title';
import Input from './components/Input';
import TaskContainer from './components/TaskContainer';

const App = () => {
    const [taskList, setTaskList] = useState([]);       // Object to store each task as an entry
    const [newTask, setNewTask] = useState("");         // String which contains the task
    const [nextId, setNextId] = useState(1);            // Unique ID for each task

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');      // Retrieving stored tasks
        const storedId = localStorage.getItem('nextId');        // Retrieving stored task IDs

        // If retrieved stored tasks successfully
        if(storedTasks) {
            try {
                setTaskList(JSON.parse(storedTasks));       // Parsing retrieved task list into object list
            } catch(e) {        // If an error is faced during the parsing
                console.error("Error parsing tasks from local storage:", e);
                setTaskList([]);
            }
        }

        // If retrieved stored ID successfully
        if(storedId) {
            setNextId(parseInt(storedId, 10));      // Convert stored ID to integer decimal number and assign to the next task ID
        }
    }, []);

    // Run the function on any change of task list/the next task ID
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList));    // Update task in local storage
        localStorage.setItem('nextId', nextId.toString());          // Update next task ID in local storage
    }, [taskList, nextId]);

    // Add task to tasklist on mouse click
    const handleClick = () => {
        if(newTask.trim() === "") return;       // Do nothing on empty task

        // Create new task object
        const newTaskObj = {
            id: nextId,
            desc: newTask.trim(),
            completed: false
        }
        setTaskList([...taskList, newTaskObj]);     // Add the new task to the existing task list
        setNextId(nextId + 1);                      // Increment the task ID by 1 to the next task ID
        setNewTask("");                             // Make the task empty
    };

    // Add task to tasklist on hitting 'Enter'
    const handleKeyDown = (e) => {
        if(e.key === "Enter")   handleClick();
    };

    // Function to toggle between task completion status
    const toggleCompleted = (id) => {
        const updatedTasks = taskList.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task
        );
        setTaskList(updatedTasks);
    }

    // Delete task from tasklist on mouse click
    const deleteTask = (id) => {
        const updatedTasks = taskList.filter(task => task.id !== id);
        setTaskList(updatedTasks)
    }

    return (
        <div className="flex justify-center items-center bg-[rgb(30,30,30)] min-h-screen w-screen">
            <div className="flex flex-col items-center h-screen w-screen text-white overflow-hidden gap-8">
                {/* Title of the app */}
                <Title />
                {/* Input of the app */}
                <Input newTask={newTask} setNewTask={setNewTask} handleClick={handleClick} handleKeyDown={handleKeyDown} />
                {/* Task container */}
                <TaskContainer taskList={taskList} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
            </div>
        </div>
    );
};

export default App;