import { useState } from "react";
import shortid from "shortid";
import { TodoFormProps } from "./TodoInterFace";
import "./TodoStyle.css";

const Todoform = (props: TodoFormProps) => {
  const [text, setText] = useState<string>("");

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: text,
      complete: false,
    });
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        className="input-field"
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
