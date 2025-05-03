import { useState } from "react";
import "./App.css";
import Todoform from "./components/Todoform/Todoform";
import Todo from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);
  const AddTodo = (todo: { id: string; text: string; complete: boolean }) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div className="container">
        <Todoform onSubmit={AddTodo} todos={[]} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
