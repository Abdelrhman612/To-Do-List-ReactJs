import { useState } from "react";
import "./App.css";
import Todoform from "./components/Todoform/Todoform";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const AddTodo = (todo: string) => {
    setTodos([todo, ...todos]);
  };
  return (
    <>
      <div className="container">
        <Todoform onSubmit={AddTodo} />
      </div>
    </>
  );
}

export default App;
