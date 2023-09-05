import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute ({ redirectPath = "/login", isAllowed }) {
    console.log(isAllowed);
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return <Outlet />
  };