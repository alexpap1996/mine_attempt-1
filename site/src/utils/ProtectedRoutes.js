import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalState } from '../contexts/Context'

const isUserLoggedIn = () => {
  const { state: { user } } = GlobalState();
  return user
};

// if the user is logged in we allow them to continue with their selected path (Outlet component handles this)
// if they are not logged in we redirect them to login path
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