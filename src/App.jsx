import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="Center">
      <div className="App">
        <p style={{color: "white"}}>Todo List App</p>
        
        <AddTodo />
        <FilterTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
