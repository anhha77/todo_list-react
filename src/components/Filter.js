import React from "react";

function Filter({ showIncompleted, showIncompletedCheck }) {
  return (
    <div className="togglebutton-wrapper">
      <label htmlFor="incompleted-task">Show incompleted tasks only</label>
      <input
        type="checkbox"
        id="incompleted-task"
        className="btn-action task-filter"
        checked={showIncompleted}
        onChange={(event) => {
          showIncompletedCheck(event);
        }}
      />
    </div>
  );
}

export default Filter;
