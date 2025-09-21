import { RxCrossCircled } from 'react-icons/rx';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';

// Task component representing each task in the task list
const Task = ({ task, toggleCompleted, deleteTask }) => {
    return (
        <li className="flex items-start gap-5">
            {task.completed ? (
                // If the task is completed
                <FiCheckCircle onClick={() => toggleCompleted(task.id)}
                    className="text-2xl text-green-500"
                />
            ) : (
                // If the task is pending
                <FiCircle onClick={() => toggleCompleted(task.id)}
                    className="text-2xl"
                />
            )}
            {/* Task Description */}
            <span
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'gray' : 'white',
                }}
                className="flex-1 transition-all duration-100"
            >
                {task.desc}
            </span>

            {/* Delete task from list */}
            <RxCrossCircled onClick={() => deleteTask(task.id)}
                className="text-2xl text-red-500"
            />
        </li>
    );
};

export default Task;