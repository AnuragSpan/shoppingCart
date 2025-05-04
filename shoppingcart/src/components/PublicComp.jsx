import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicComp = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default PublicComp;
