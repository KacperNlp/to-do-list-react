import Button from "../Button/Button";

import "./DoneTask.scss";

const DoneTask = ({ task, date, confirmationDate, onRemoveTaskFromList }) => {
  const dateHtml = !!date.length ? date : "not set";

  return (
    <li className="done-task">
      <div className="done-task__content-container">
        <p className="done-task__task">{task}</p>
        <p>
          <strong>Date:</strong> {dateHtml}
        </p>
        <p>
          <strong>Confirmed at:</strong> {confirmationDate}
        </p>
      </div>
      <Button text="Remove from list" onClick={onRemoveTaskFromList} />
    </li>
  );
};

export default DoneTask;
