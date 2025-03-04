import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo, completedTodo, deleteTodo }) => {
    const handleIconClick = () => {
        !todo.completed && completedTodo(todo.id);
    };

    const handleIconDeleteClick = () => {
        deleteTodo(todo.id);
    };

    return (
        <article className="flex gap-4 border-b border-b-gray-400 py-4 dark:bg-gray-800 dark:text-gray-400">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${todo.completed ? "grid place-items-center border-gray-400 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block border-gray-400"}`}
                onClick={handleIconClick}
            >
                {todo.completed && <CheckIcon />}
            </button>

            <p
                className={`grow text-gray-600 dark:text-gray-300 ${todo.completed && "line-through"}`}
            >
                {todo?.title}
            </p>
            <button onClick={handleIconDeleteClick}>
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItem;
