const TodoComputed = ({ counterCompleted, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4 dark:bg-gray-800">
            <span className="text-gray-600 dark:text-gray-300">{`${counterCompleted} item left`}</span>
            <button
                className="text-gray-600 dark:text-gray-300"
                onClick={clearCompleted}
            >
                Clear completed
            </button>
        </section>
    );
};

export default TodoComputed;
