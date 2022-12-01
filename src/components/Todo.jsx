import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: complete ? "line-through" : "none" , color: "yellow"}}
    >
      {text}
    </li>
  );
};

export default Todo;
