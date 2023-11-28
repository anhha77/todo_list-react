import React from "react";
import ListItem from "./ListItem";

function TaskList({ tasks, showIncompleted, handleCheckDone, removeTask }) {
  return (
    <ul className="task-list">
      {tasks
        .filter((element) => (showIncompleted ? element.status !== true : true))
        .map((element) => (
          <ListItem
            element={element}
            handleCheckDone={handleCheckDone}
            removeTask={removeTask}
          />
        ))}
    </ul>
  );
}

export default TaskList;
