import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./pages/Events/Events";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";

import "./App.css";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" Component={Events} />
      <Route path="/login" Component={Login} />
      <Route path="/admin" Component={Admin} />
    </Routes>
  );
};

export default App;
