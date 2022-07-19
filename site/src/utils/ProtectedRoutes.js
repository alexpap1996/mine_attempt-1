import { useLocation } from "react-router";
import { Navigate, Link, Outlet } from "react-router-dom";
import { GlobalState } from '../contexts/Context'

const isUserLoggedIn = () => {
  const { state: { user } } = GlobalState();
  return user
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const loggedIn = isUserLoggedIn();
  return loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;