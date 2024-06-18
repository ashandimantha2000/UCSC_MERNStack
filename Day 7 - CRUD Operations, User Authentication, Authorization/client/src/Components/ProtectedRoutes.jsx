import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const token = localStorage.getItem("jwtToken");
  if (!token) return <Navigate to="/login" />;
  return <div>ProtectedRoutes</div>;
}

export default ProtectedRoutes;
