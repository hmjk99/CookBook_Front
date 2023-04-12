import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  }, []);
  return (
    <>
      <div>
        <h1>ERROR 404</h1>
        <h2>Page Not Found</h2>
      </div>
    </>
  );
};

export default NotFound;
