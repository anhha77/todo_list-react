import React from "react";

function FormNewTask({ handleNewTask, addNewTask, handleInputChange }) {
  return (
    <form
      onSubmit={(event) => {
        handleNewTask(event);
      }}
      className="form-todo-list"
    >
      <label htmlFor="input-todo-list">Add to the todo list</label>
      <div className="input-contain">
        <input
          type="text"
          id="input-todo-list"
          autoComplete="off"
          value={addNewTask}
          onChange={(event) => {
            handleInputChange(event);
          }}
        />
        <button className="btn-form" type="submit">
          ADD ITEM
        </button>
      </div>
    </form>
  );
}

export default FormNewTask;
