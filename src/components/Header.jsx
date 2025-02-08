import { useState } from "react";
import MoonIcon from "./icons/MoonIcon";

const initialTodo = {
    id: 0,
    todoName: "",
    completed: false,
};

const Header = ({ addTodo }) => {
    const [todo, setTodo] = useState(initialTodo);

    const handleChange = (e) => {
        setTodo({ ...todo, todoName: e.target.value });
    };

    const handleSudmit = (e) => {
        console.log(e);
        e.preventDefault();
        addTodo(todo);
    };

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold tracking-[0.3em] text-white uppercase">
                    todo
                </h1>
                <button>
                    <MoonIcon iconColor="#FFF" />
                </button>
            </div>
            <form
                action=""
                onSubmit={handleSudmit}
                className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4"
            >
                <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-400"></span>
                <input
                    className="w-full text-gray-400 outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Create a new todo..."
                    onChange={handleChange}
                />
            </form>
        </header>
    );
};

export default Header;
