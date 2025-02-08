import CrossIcon from "./icons/CrossIcon";
const Article = ({ todo }) => {
    return (
        <article
            className="flex gap-4 border-b border-b-gray-400 py-4"
            key={todo.id}
        >
            <button className="inline-block h-5 w-5 rounded-full border-2 border-gray-400"></button>
            <p className="grow text-gray-600">{todo.todoName}</p>
            <button>
                <CrossIcon />
            </button>
        </article>
    );
};

export default Article;
