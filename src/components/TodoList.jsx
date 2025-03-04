import TodoItem from "./TodoItem";

const TodoList = ({ todos, completedTodo, deleteTodo }) => {
    return (
        <div className="mt-8 overflow-hidden rounded-t-md bg-white [&>article]:px-4">
            {todos?.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    completedTodo={completedTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
