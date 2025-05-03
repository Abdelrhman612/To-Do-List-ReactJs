import { TodoProps } from "./TodoInterFace";
import "./TodoStyle.css";
const Todo = (props: TodoProps) => {
  return (
    <div className="d-f">
      <div className="text">{props.todo.text}</div>
      <button className="delete-btn" onClick={props.onDelete}>
        x
      </button>
    </div>
  );
};

export default Todo;
