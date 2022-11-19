import DoneTask from "../../basic-components/DoneTask/DoneTask";

import "./DoneTaskList.scss";

const DoneTasksList = ({ doneTasks, removeTaskFromDoneTasksList }) => {
  const handleOnRemoveTaskFromList = (key) => {
    const updatedArrayWithDoneTasks = doneTasks.filter(
      (task) => task.key !== key
    );

    removeTaskFromDoneTasksList(updatedArrayWithDoneTasks);
  };

  const doneTasksHtml = doneTasks.map(
    ({ key, taskValue, date, confirmationDate }) => (
      <DoneTask
        key={key}
        task={taskValue}
        date={date}
        confirmationDate={confirmationDate}
        onRemoveTaskFromList={() => handleOnRemoveTaskFromList(key)}
      />
    )
  );

  if (!doneTasksHtml.length) return <h1>You didn't finish any task!</h1>;

  return (
    <div className="done-tasks-list">
      {doneTasksHtml.length > 5 && (
        <p className="done-tasks-list__message-about-number-of-tickets">
          (We display for you only 5 last task of {doneTasksHtml.length} all of
          them)
        </p>
      )}
      <ul className="done-taks-list__list">
        {doneTasksHtml.reverse().slice(0, 5)}
      </ul>
    </div>
  );
};

export default DoneTasksList;
