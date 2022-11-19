const Alert = ({ message, type }) => {
  const classesOfAlert = !!type.length ? `alert ${type}` : "alert";

  return (
    <div className={classesOfAlert}>
      <p className="alert__message">{message}</p>
    </div>
  );
};

export default Alert;
