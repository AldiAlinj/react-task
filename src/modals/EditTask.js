import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function EditTask({ modal, toggle, updateTask, task }) {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeDescription = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["id"] = task.id;
    tempObj["name"] = name;
    tempObj["description"] = description;
    if (name === "" || description === "") {
      alert("Please fill out both forms!");
    } else {
    updateTask(tempObj);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader
        toggle={toggle}
        cssModule={{ "modal-title": "w-100 text-center" }}
      >
        Update Task
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group" id="nameform">
            <input
              type="text"
              placeholder="Task title..."
              className="form-control"
              value={name}
              onChange={handleChangeName}
              name="name"
              style={{background : "#0972a6", borderColor :"#0972a6", color : "white" }}
            ></input>
          </div>
          <br></br>
          <div className="form-group" id="descriptionform">
            <textarea
              rows="5"
              placeholder="Task description..."
              className="form-control"
              value={description}
              onChange={handleChangeDescription}
              name="description"
              style={{background : "#0972a6", borderColor :"#0972a6", color : "white" }}

            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={handleUpdate}
          cssModule={{ "modal-title": "w-100 text-center" }}
        >
          Update Task
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default EditTask;
