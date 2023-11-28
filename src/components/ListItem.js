import React from "react";

function ListItem({ element, handleCheckDone, removeTask }) {
  return (
    <li key={element.id} className={element.status ? "done" : ""}>
      <span>{element.title}</span>
      <div className="action">
        <input
          type="checkbox"
          className="btn-action btn-action-done"
          checked={element.status}
          onChange={(event) => {
            handleCheckDone(event, element.id);
          }}
        />
        <button
          className="btn-action btn-action-delete"
          onClick={(event) => {
            removeTask(event, element.id);
          }}
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default ListItem;
