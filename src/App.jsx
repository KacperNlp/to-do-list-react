import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import DoneTasksList from "./components/pages/DoneTasksList/DoneTasksList";
import FormToAddTask from "./components/pages/FormToAddTask/FormToAddTask";
import ToDoList from "./components/pages/ToDoList/ToDoList";

import "./App.scss";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addNewTask = (newTask) => {
    const arrayAfterAddingNewTask = [...toDoList, newTask];
    setToDoList(arrayAfterAddingNewTask);
  };

  const getCurrentDate = () => {
    const date = new Date();

    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    const confirmationDate = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;

    return confirmationDate;
  };

  const addTaskToDone = (key) => {
    const doneTask = toDoList.filter((task) => task.key === key);
    const toDoListAfterRemovDoneTask = toDoList.filter(
      (task) => task.key !== key
    );

    const newDoneTasksArray = doneTasks.map((task) => task);
    doneTask[0].confirmationDate = getCurrentDate();
    newDoneTasksArray.push(doneTask[0]);

    setDoneTasks(newDoneTasksArray);
    setToDoList(toDoListAfterRemovDoneTask);
  };

  const removeTaskFromDoneTasksList = (updatedArrayWithDoneTasks) => {
    setDoneTasks(updatedArrayWithDoneTasks);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navigation">
          <Link to="/" className="navigation__link">
            Add task
          </Link>
          <Link to="/to-do" className="navigation__link">
            List of tasks
          </Link>
          <Link to="/done" className="navigation__link">
            Done tasks
          </Link>
        </nav>
        <Routes>
          <Route
            path="/done"
            element={
              <DoneTasksList
                doneTasks={doneTasks}
                removeTaskFromDoneTasksList={removeTaskFromDoneTasksList}
              />
            }
          />
          <Route
            path="/to-do"
            element={
              <ToDoList toDoList={toDoList} addTaskToDone={addTaskToDone} />
            }
          />
          <Route path="/" element={<FormToAddTask addNewTask={addNewTask} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
