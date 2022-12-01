import { combineReducers } from "redux";
import todos from "./todoReducer";
import filterTodo from "./filterReducer";

export default combineReducers({
  todos,
  filterTodo,
});
