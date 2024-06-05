import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
function ProtectedRoute() {
  const jwtToken = Cookies.get("userDetails");
  console.log(jwtToken);
  if (!jwtToken) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
export default ProtectedRoute;
