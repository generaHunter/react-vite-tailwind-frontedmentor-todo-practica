import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/icons/Footer";
import MainWrapper from "./components/MainWrapper";

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        console.log("addTodo", todo);
        setTodos([...todos, todo]);
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat">
            <Header addTodo={addTodo} />
            <MainWrapper todos={todos} />
            <Footer />
            <p className="mx-auto mt-8 text-center text-gray-600">
                Drag and drop to reoder list
            </p>
        </div>
    );
};

export default App;
