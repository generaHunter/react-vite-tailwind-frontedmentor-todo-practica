import Article from "./Article";

const MainWrapper = ({ todos }) => {
    console.log("mainWrapper", todos);
    return (
        <main className="container mx-auto mt-8 px-4">
            <div className="rounded-md bg-white [&>article]:px-4">
                {todos?.map((todo, index) => (
                    <Article key={index} todo={todo} />
                ))}
                <section className="flex justify-between px-4 py-4">
                    <span className="text-gray-600">5 item left</span>
                    <button className="text-gray-600">Clear completed</button>
                </section>
            </div>
        </main>
    );
};

export default MainWrapper;
