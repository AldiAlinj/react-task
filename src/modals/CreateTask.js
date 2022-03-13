import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import uuid from "react-uuid";

function CreateTask({ save, modal, toggle }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [completed] = useState(false);

  const handleSetName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSetDescription = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  const handleSave = () => {
    let task = {};
    task["id"] = uuid();
    task["name"] = name;
    task["description"] = description;
    task["completed"] = completed;
    if (name === "" || description === "") {
      alert("Please fill out both forms!");
    } else {
      save(task);
      setName("");
      setDescription("");
      toggle();
    }
  };

  return (
    <div className="containter col-md-4">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          cssModule={{ "modal-title": "w-100 text-center" }}
        >
          ADD TASK
        </ModalHeader>
        <ModalBody>
          <hr className="line"></hr>
          <div>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Task title..."
                  className="form-control"
                  value={name}
                  onChange={handleSetName}
                  name="name"
                  id="nameform"
                  required
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <textarea
                  rows="5"
                  placeholder="Task description..."
                  className="form-control"
                  value={description}
                  onChange={handleSetDescription}
                  name="description"
                  id="descriptionform"
                  required
                ></textarea>
              </div>
            </form>
            <br></br>
            <button className="btn btn-primary" id="btn" onClick={handleSave}>
              ADD TASK
            </button>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTask;
