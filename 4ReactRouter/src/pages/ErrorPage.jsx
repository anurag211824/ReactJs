/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Link, useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigte = useNavigate();
  const handleGoBack = () => {
    navigte(-1);
  };
  return (
    <div>
      {error && <p>{error.data}</p>}
      <Link to="/">Go Back Home</Link>

      <button className="bg-lime-400 text-white text-xl" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
