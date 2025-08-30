import useUserStore from "@/store/useUserStore";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUserStore();

  if (loading) {
    return <p className="text-gray-500">Checking session...</p>;
  }
  // ✅ if not logged in → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
