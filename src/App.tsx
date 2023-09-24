import { FC } from "react";
import { Outlet } from "react-router-dom";

import "./globalStyles.css";

const App: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
