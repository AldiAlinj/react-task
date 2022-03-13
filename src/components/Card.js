import React, { useState } from "react";
import EditTask from "../modals/EditTask";

function Card({ task, deleteTask, updateListArray }) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (task) => {
    updateListArray(task);
    setModal(false);
  };

  const handleDelete = (e, task) => {
    deleteTask(task);
  };

  const handleCompleted = (e) => {
    task.completed = e.currentTarget.checked;
    updateListArray(task);
  };

  return (
    <li
      id="cardItem"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDisabled"
          onChange={handleCompleted}
          checked={task.completed}
        ></input>
        <label className="form-check-label" htmlFor="flexCheckDisabled">
          <div className="ms-2 me-auto" id="taskText">
            <div
              className={task.completed ? "fw-bold text-secondary" : "fw-bold"}
            >
              {task.name}
            </div>
            <div className={task.completed ? "text-secondary" : ""}>
              {task.description}
            </div>
          </div>
        </label>
      </div>
      <span className="badge">
        <i
          className="fa-solid fa-pen"
          style={{ color: "#052033", cursor: "pointer" }}
          onClick={() => setModal(true)}
        ></i>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <i
          className="fas fa-trash-alt"
          style={{ color: "#052033", cursor: "pointer" }}
          onClick={(e) => {
            handleDelete(e, task);
          }}
        ></i>
      </span>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        task={task}
      />
    </li>
  );
}

export default Card;
