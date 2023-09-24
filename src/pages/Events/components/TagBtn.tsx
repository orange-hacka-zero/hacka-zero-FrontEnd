import React from "react";

import "../../../globalStyles.css";
import style from "./TagBtn.module.css";

type TabBtnProps = {
  children: string;
};

const TagBtn: React.FC<TabBtnProps> = ({ children }) => {
  return (
    <li>
      <button className={style.tagBtn}>{children}</button>
    </li>
  );
};

export default TagBtn;
