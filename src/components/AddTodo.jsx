import React from "react";
import { addTodo } from "../redux/action/todoAction";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() != "") {
      dispatch(addTodo(input.value.trim()));
    }
  };
  return (
    <React.Fragment>
      <div style={{display: "flex", gap: "10px", marginBottom: "20px"}}>
        <input style={{backgroundColor: "#7D8F69", border: "none", outline: "none", color: "yellow", paddingLeft: "10px"}} type="text" ref={(node) => (input = node)} />
        <button style={{backgroundColor: "#829460", border: "none", color: "#FFFFFF", padding: "5px 10px"}} type="submit" onClick={onClick}>
          Add Todo
        </button>
      </div>
    </React.Fragment>
  );
};

export default connect()(AddTodo);
