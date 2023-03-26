import Todo from "./components/Todo";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.length > 0) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    } else alert("Name your task");
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((e) => e !== text);
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>My Todos</h1>
      <input
        value={newTodo}
        type='text'
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className='btn--main' onClick={addTodo}>
        Add new task
      </button>
      {todos.map((e) => (
        <Todo text={e} deleteTodo={deleteTodo} key={e} />
      ))}
    </div>
  );
};

export default App;
