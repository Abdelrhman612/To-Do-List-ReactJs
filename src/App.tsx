/* eslint-disable prefer-const */
import { useState } from "react";
import Todoform from "./components/Todoform/Todoform";
import Todo from "./components/Todo/Todo";

function App() {
  let [todos, setTodos] = useState<
    { id: string; text: string; complete: boolean }[]
  >([]);
  const [todosToshow, setTodoToShow] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  const AddTodo = (todo: { id: string; text: string; complete: boolean }) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodoToshow = (s: string) => {
    setTodoToShow(s);
  };
  const removeAllTodosComplete = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };
  const toggleComplete = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  if (todosToshow === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todosToshow === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }

  return (
    <>
      <div className="container">
        <Todoform onSubmit={AddTodo} todos={[]} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))}
        <button
          className="update-btn btn"
          onClick={() => updateTodoToshow("all")}
        >
          All
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateTodoToshow("active")}
        >
          Active
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateTodoToshow("complete")}
        >
          Complete
        </button>
        <button className="all-btn btn" onClick={removeAllTodosComplete}>
          Remove All complete todos
        </button>
        <button
          className="all-btn btn"
          onClick={() => {
            setTodos(
              todos.map((todo) => ({ ...todo, complete: toggleAllComplete }))
            );
            setToggleAllComplete(!toggleAllComplete);
          }}
        >
          Toggle All complete : {`${toggleAllComplete}`}
        </button>
      </div>
    </>
  );
}

export default App;
