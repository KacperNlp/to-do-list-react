import TaskToDo from "../../basic-components/TaskToDo/TaskToDo";

import "./ToDoList.scss";

const ToDoList = ({ toDoList, addTaskToDone, removeTaskFromToDoList }) => {
  const removeTask = (key) => {
    const newToDoList = toDoList.filter((task) => task.key !== key);
    removeTaskFromToDoList(newToDoList);
  };

  if (!toDoList.length) return <h1>You have to add task!</h1>;

  const toDoListSortedByDate = toDoList.sort((a, b) => {
    const bDate = new Date(b.date);
    const aDate = new Date(a.date);
    return bDate - aDate;
  });

  const generatedToDoList = toDoListSortedByDate.map(
    ({ taskValue, date, key, isChecked }) => (
      <TaskToDo
        key={key}
        id={key}
        task={taskValue}
        date={date}
        isImportant={isChecked}
        addTaskToDone={() => addTaskToDone(key)}
        removeTask={() => removeTask(key)}
      />
    )
  );

  return (
    <div className="to-do-list">
      <ul className="to-do-list__ul-list">{generatedToDoList.reverse()}</ul>
    </div>
  );
};

export default ToDoList;
