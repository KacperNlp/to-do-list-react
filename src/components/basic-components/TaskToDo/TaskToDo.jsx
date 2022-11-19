import Button from "../Button/Button";

import "./TaskToDo.scss";

const TaskToDo = ({
  id,
  task,
  date,
  isImportant,
  addTaskToDone,
  removeTask,
}) => {
  const dateHtml = !!date.length ? date : "not set";
  const taskClasses = isImportant
    ? "task-to-do task-to-do--important"
    : "task-to-do";

  return (
    <li className={taskClasses}>
      <div className="task-to-do__content">
        <p className="task-to-do__task">{task}</p>
        <p className="task-to-do__date">
          <strong>date:</strong> {dateHtml}
        </p>
      </div>
      <div className="task-to-do__buttons">
        <Button text="Set as done" onClick={addTaskToDone} />
        <Button text="Remove task" onClick={removeTask} />
      </div>
    </li>
  );
};

export default TaskToDo;
