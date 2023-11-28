import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import FormNewTask from "./components/FormNewTask";

function App() {
  const [tasks, setTasks] = useState([
    { title: "Learn Javascript", status: false, id: Date.now() },
    { title: "Code a todo list", status: false, id: Date.now() + 1 },
  ]);

  const [showIncompleted, setShowIncompleted] = useState(false);

  const [addNewTask, setAddNewTask] = useState("");

  const showIncompletedCheck = (event) => {
    setShowIncompleted(event.target.checked);
  };

  const handleCheckDone = (event, taskId) => {
    setTasks(
      tasks.map((element) => {
        if (taskId === element.id) {
          return { ...element, status: event.target.checked };
        }
        return element;
      })
    );
  };

  const removeTask = (event, taskId) => {
    let liElement = event.target.parentNode.parentNode;
    liElement.classList.add("fall");
    liElement.addEventListener("transitionend", () => {
      setTasks(
        tasks.filter((element) => {
          return element.id !== taskId;
        })
      );
    });
  };

  const handleInputChange = (event) => {
    setAddNewTask(event.target.value);
  };

  const handleNewTask = (event) => {
    event.preventDefault();
    if (addNewTask) {
      let newTask = {
        title: addNewTask,
        status: false,
        id: Date.now(),
      };
      setTasks([...tasks, newTask]);
    }
    setAddNewTask("");
  };

  return (
    <div className="main-contain">
      <div className="project-container">
        <Header />
        <TaskList
          tasks={tasks}
          showIncompleted={showIncompleted}
          handleCheckDone={handleCheckDone}
          removeTask={removeTask}
        />
        <Filter
          showIncompleted={showIncompleted}
          showIncompletedCheck={showIncompletedCheck}
        />

        <FormNewTask
          handleNewTask={handleNewTask}
          addNewTask={addNewTask}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default App;
