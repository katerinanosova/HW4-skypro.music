import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute ({ redirectPath = "/login" }) {
    
    const user = JSON.parse(window.localStorage.getItem('user'));

    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return <Outlet />
  };