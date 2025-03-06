import { Draggable, Droppable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, completedTodo, deleteTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    className="mt-8 overflow-hidden rounded-t-md bg-gray-800 [&>article]:px-4"
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProvided}
                >
                    {todos?.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            draggableId={`${todo.id}`}
                            index={index}
                        >
                            {(draggableProvided) => (
                                <TodoItem
                                    todo={todo}
                                    completedTodo={completedTodo}
                                    deleteTodo={deleteTodo}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.dragHandleProps}
                                    {...draggableProvided.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
