import "./TodoStyle.css";
interface TodoProps {
  todo: {
    text: string;
  };
}

const Todo = (props: TodoProps) => {
  return (
    <div className="d-f">
      <div className="text">{props.todo.text}</div>
      <button className="delete-btn">x</button>
    </div>
  );
};

export default Todo;
