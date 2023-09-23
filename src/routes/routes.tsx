import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import Events from "../pages/Events/Events";
import Admin from "../pages/Admin/Admin";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" Component={Events} />
      <Route path="/login" Component={Login} />
      <Route path="/admin" Component={Admin} />
    </Route>
  )
);
