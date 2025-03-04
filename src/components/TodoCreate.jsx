import { useState } from "react";

const initialTodo = {
    id: 0,
    title: "",
    completed: false,
};

const TodoCreate = ({ addTodo }) => {
    const [todo, setTodo] = useState(initialTodo);

    const handleChange = (e) => {
        setTodo({ ...todo, title: e.target.value.trimStart() });
    };

    const handleSudmit = (e) => {
        e.preventDefault();
        if (!todo.title.trim()) {
            return setTodo({ ...todo, title: "" });
        }

        addTodo({ ...todo, id: Date.now().toString() });
        setTodo(initialTodo);
    };
    return (
        <form
            action=""
            onSubmit={handleSudmit}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-400"></span>
            <input
                className="w-full text-gray-400 outline-none dark:text-gray-300"
                type="text"
                name="title"
                id=""
                placeholder="Create a new todo..."
                value={todo.title}
                onChange={handleChange}
            />
        </form>
    );
};

export default TodoCreate;
