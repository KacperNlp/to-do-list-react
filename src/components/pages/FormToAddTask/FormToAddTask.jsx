import { useState } from "react";
import Button from "../../basic-components/Button/Button";

import "./FormToAddTask.scss";

const FormToAddTask = ({ addNewTask }) => {
  const [task, setTask] = useState({
    taskValue: "",
    date: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const minDate = () => {
    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const today = currentDate.getFullYear() + "-" + month + "-" + day;

    return today;
  };

  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnChangePtiority = () => setIsChecked(!isChecked);

  const handleOnFormSubmit = (e) => {
    e.preventDefault();

    if (!task.taskValue.length) return alert("You cannot create empty task!");

    const key = Math.random() * 10000;
    const newTask = {
      ...task,
      isChecked,
      key,
    };

    setIsChecked(false);
    setTask({
      taskValue: "",
      date: "",
    });
    addNewTask(newTask);
  };

  const { taskValue, date } = task;

  return (
    <div className="form-container">
      <form
        type="post"
        className="form-add-task"
        noValidate
        onSubmit={handleOnFormSubmit}
      >
        <div className="form-add-task__inputs-container">
          <label className="form-add-task__label">
            <span className="form-add-task__label-text">Task:</span>
            <input
              type="text"
              className="form-add-task__input"
              name="taskValue"
              value={taskValue}
              onChange={handleChangeInputValue}
            />
          </label>
          <label className="form-add-task__label">
            <span className="form-add-task__label-text">
              Complete the task before the day:
            </span>
            <input
              type="date"
              className="form-add-task__input"
              name="date"
              value={date}
              min={minDate()}
              onChange={handleChangeInputValue}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="isChecked"
              checked={isChecked}
              onChange={handleOnChangePtiority}
            />
            <span className="form-add-task__checkbox-label">
              It's important?
            </span>
          </label>
        </div>
        <div>
          <Button text="Add" />
        </div>
      </form>
    </div>
  );
};

export default FormToAddTask;
