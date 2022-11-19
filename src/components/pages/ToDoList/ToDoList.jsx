import TaskToDo from "../../basic-components/TaskToDo/TaskToDo";

import "./ToDoList.scss";

const ToDoList = ({ toDoList, addTaskToDone }) => {
  const generatedToDoList = toDoList.map(
    ({ taskValue, date, key, isChecked }) => (
      <TaskToDo
        key={key}
        id={key}
        task={taskValue}
        date={date}
        isImportant={isChecked}
        addTaskToDone={() => addTaskToDone(key)}
      />
    )
  );

  if (!generatedToDoList.length) return <h1>You have to add task!</h1>;

  return (
    <div className="to-do-list">
      <ul className="to-do-list__ul-list">{generatedToDoList.reverse()}</ul>
    </div>
  );
};

export default ToDoList;
