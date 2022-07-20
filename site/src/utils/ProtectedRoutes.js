import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalState } from '../contexts/Context'

const isUserLoggedIn = () => {
  const { state: { user } } = GlobalState();
  return user || localStorage.getItem('user')
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