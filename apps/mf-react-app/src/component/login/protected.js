import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./userAuthControl";

const ProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();
  console.log("Check user in Private: ", user);

  //User authentication for protected route
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
