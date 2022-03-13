import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
function TaskList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [search, setSearch] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    let value = localStorage.getItem("taskList");
    if (value) {
      let taskListObj = JSON.parse(value);
      setTaskList(taskListObj);
    }
  }, []);

  const deleteTask = (task) => {
    let tempList = taskList.filter(function( item ) {
      return item.id !== task.id;
    });
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const updateListArray = (task) => {
    let tempTaskList = JSON.parse(localStorage.getItem("taskList"));
    if (!tempTaskList) {
      setTaskList([]);
      return;
    }

    let updatedTaskList = tempTaskList.map((item) => {
      if (item.id === task.id) {
  
        return {
          ...item,
          name: task.name,
          description: task.description,
          completed: task.completed,
        };
      }
      return item;
    });

    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    setTaskList(updatedTaskList);
    setModal(false);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    let taskListArray = [];
    setSearch(value);
    let tempTaskList = localStorage.getItem("taskList");
    if (!tempTaskList) {
      setTaskList([]);
      return;
    }
    tempTaskList = JSON.parse(tempTaskList);
    tempTaskList.forEach((element) => {
      if (
        element.name.toLowerCase().includes(value.toLowerCase()) ||
        element.description.toLowerCase().includes(value.toLowerCase())
      ) {
        taskListArray.push(element);
      }
    });
    setTaskList(taskListArray);

  };

  const saveTask = (task) => {
    let tempList = taskList;
    tempList.push(task);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  return (
    <>
    <div className="container col-md-2 my-4 ">
            <button
              className="btn btn-primary"
              id="addBtn"
              onClick={() => setModal(true)}
            >
              ADD TASK
            </button>
        </div>
      <div className="container col-md-4 my-5">
        
        <div className="body">
          <div className="text-center">
            <h3>
              <b>TASK LIST</b>
            </h3>
            <hr className="line"></hr>
          </div>
          <br></br>
          <div className="form-outline" id="searchBar">
            <input
              type="text"
              id="form1"
              className="form-control"
              onChange={handleSearch}
              name="search"
              placeholder="Search..."
              aria-label="Search"
              value={search}
            />
          </div>
          <br></br>
          {taskList.map((task, index) => (
            <Card
              task={task}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
              key={task.id}
            />
          ))}
        </div>

        <CreateTask save={saveTask} modal={modal} toggle={toggle} />
      </div>
    </>
  );
}

export default TaskList;
