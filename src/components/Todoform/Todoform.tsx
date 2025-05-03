import "./Todoform.css";
import { useState } from "react";
interface TodoFormProps {
  onSubmit: (text: string) => void;
}

const Todoform = (props: TodoFormProps) => {
  const [text, setText] = useState<string>("");
  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(text);
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Add a new task"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="btn" onClick={HandleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default Todoform;
