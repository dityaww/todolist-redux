import React from "react";
// import PropType from "prop-types";
import { connect } from "react-redux";
import { filter } from "../redux/action/todoAction";

const Link = ({ active, children, onClick }) => {
  return (
    <button onClick={onClick} disabled={active} style={{ marginLeft: "4px" , backgroundColor: "#61764B", border: "none", color: "#eee", padding: "3px 12px" }}>
      {children}
    </button>
  );
};
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log("dispatch " + ownProps.filter);
    dispatch(filter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
