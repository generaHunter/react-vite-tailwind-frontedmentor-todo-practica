import { useState } from "react";
import { ACTIVE, ALL, COMPLETED } from "../constants/FilterTodoConstants";

const TodoFilter = ({ filterTodos }) => {
    const [currentFilter, setCurrentFilter] = useState(ALL);

    const handleClick = (filter) => {
        setCurrentFilter(filter);
        filterTodos(filter);
    };

    return (
        <section className="container mx-auto mt-8 font-bold text-gray-600 dark:text-gray-400">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 dark:bg-gray-800">
                <button
                    className={`${currentFilter === ALL ? "text-blue-500 hover:text-gray-600" : "text-gray-600 hover:text-blue-600"}`}
                    onClick={() => handleClick(ALL)}
                >
                    All
                </button>
                <button
                    className={`${currentFilter === ACTIVE ? "text-blue-600 hover:text-gray-400" : "text-gray-600 hover:text-blue-600"}`}
                    onClick={() => handleClick(ACTIVE)}
                >
                    Active
                </button>
                <button
                    className={`${currentFilter === COMPLETED ? "text-blue-600 hover:text-gray-400" : "text-gray-600 hover:text-blue-600"}`}
                    onClick={() => handleClick(COMPLETED)}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
