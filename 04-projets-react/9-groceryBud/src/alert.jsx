import { useEffect } from "react";
const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(id);
  }, [removeAlert]);

  return (
    <>
      <p className={`alert ${type}`}>{msg}</p>
    </>
  );
};

export default Alert;
