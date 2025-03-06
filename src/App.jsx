import { DragDropContext } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { ALL, COMPLETED } from "./constants/FilterTodoConstants";

// const initialStateTodos = [
//     {
//         id: 1,
//         title: "Prueba 01",
//         completed: false,
//     },
//     {
//         id: 2,
//         title: "Prueba 02",
//         completed: true,
//     },
//     {
//         id: 3,
//         title: "Completar curso js",
//         completed: true,
//     },
// ];

const todoData = localStorage.getItem("todosData");

const App = () => {
    const [todos, setTodos] = useState(JSON.parse(todoData) || []);
    const [todosFilter, setTodosFilter] = useState();
    const [counterCompleted, setCounterCompleted] = useState(0);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const completedTodo = (id) => {
        //Una forma
        // const updateTodosArray = todos.map((x) => {
        //     if (x.id === id) {
        //         x.completed = !x.completed;
        //     }
        //     return x;
        // });

        const updateTodosArray = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos([...updateTodosArray]);
    };

    const deleteTodo = (id) => {
        const arrayTodoFilter = todos.filter((x) => x.id !== id);
        setTodos([...arrayTodoFilter]);
    };

    const clearCompleted = () => {
        setTodos(todos.filter((x) => !x.completed));
    };

    const filterTodos = (filter) => {
        if (filter === ALL) {
            setTodosFilter([...todos]);
        } else {
            setTodosFilter(
                filter === COMPLETED
                    ? todos.filter((x) => x.completed)
                    : todos.filter((x) => !x.completed)
            );
        }
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const startIndex = result.source.index;
        const endIndex = result.destination.index;

        const todosCopy = JSON.parse(JSON.stringify(todos));

        const [reorderItem] = todosCopy.splice(startIndex, 1);
        todosCopy.splice(endIndex, 0, reorderItem);
        setTodos([...todosCopy]);
    };

    useEffect(() => {
        localStorage.setItem("todosData", JSON.stringify(todos));
        setCounterCompleted(todos.filter((x) => !x.completed).length);
        setTodosFilter([...todos]);
    }, [todos]);

    return (
        <div className="min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat md:bg-[url(./assets/images/bg-desktop-light.jpg)] dark:bg-gray-900 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)]">
            <Header />

            <main className="md: container mx-auto mt-8 max-w-xl px-4">
                <TodoCreate addTodo={addTodo} />
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={todosFilter}
                        completedTodo={completedTodo}
                        deleteTodo={deleteTodo}
                    />
                </DragDropContext>
                <TodoComputed
                    counterCompleted={counterCompleted}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter filterTodos={filterTodos} />
            </main>
            <footer className="mx-auto mt-8 text-center text-gray-600 dark:text-gray-400">
                Drag and drop to reoder list
            </footer>
        </div>
    );
};

export default App;
