import Task from './Task';

// Task container with all the tasks listed
const TaskContainer = ({ taskList, toggleCompleted, deleteTask }) => {
    return (
        <div className="flex flex-1 w-screen justify-center overflow-y-scroll py-5 md:py-10">
            <div className="h-fit font-serif shadow-[-5px_-5px_10px_rgb(55,55,55),5px_5px_10px_rgb(0,0,0)] capitalize w-10/12 md:w-7/12 text-xl p-8 rounded-2xl">
                {taskList.length === 0 ? (
                    // If there is no task in the list
                    <p className="text-center">Hurrah! No Task Pending</p>
                ) : (
                    // If there is at least a task in the task list
                    <ul className="flex flex-col gap-6">
                        {taskList.map((taskObj) => ( // Return a Task component on each object of the task list
                            <Task key={taskObj.id} task={taskObj} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TaskContainer;