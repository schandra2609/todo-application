import { BsPlusCircleFill } from 'react-icons/bs';

// Input section of the app
const Input = ({ newTask, setNewTask, handleClick, handleKeyDown }) => {
    return (
        <div className="flex justify-center items-center w-screen gap-6 md:gap-10">
            {/* Input new task */}
            <input type="text" name="task" value={newTask} placeholder="Add new task" onChange={(e) => setNewTask(e.target.value)} onKeyDown={handleKeyDown}
                className="flex justify-center items-center bg-transparent text-white font-times tracking-wide border-b border-gray-500 rounded-md text-lg w-3/4 px-5 py-1 outline-none focus:border-b-2 focus:border-white transition-all duration-200 md:text-2xl md:w-1/2 md:px-8 md:py-2"
            />
            {/* Add to task list on click */}
            <BsPlusCircleFill onClick={handleClick}
                className="text-5xl text-[rgb(158,6,179)] bg-transparent border-none outline-none rounded-full shadow-none transition-all duration-200 active:shadow-[0_0_20px_rgb(70,70,255)] active:text-white md:text-6xl"
            />
        </div>
    );
};

export default Input;