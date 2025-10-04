import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((pre) => [{ id: Date.now(), ...todo }, ...pre]);
  };

  const updateTodo = (id, todo) => {
    setTodos((pre) => {
      pre.map((preTodo) => (preTodo.id === id ? todo : preTodo));
    });
  };

  const deleteTodo = (id) => {
    setTodos((pre) => pre.filter((preTodo) => preTodo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((pre) => {
      pre.map((preTodo) =>
        preTodo.id === id
          ? { ...preTodo, complete: !preTodo.complete }
          : preTodo
      );
    });
  };
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <h1 className="text-2xl text-red-700 font-bold">okk</h1>
    </TodoProvider>
  );
}

export default App;
