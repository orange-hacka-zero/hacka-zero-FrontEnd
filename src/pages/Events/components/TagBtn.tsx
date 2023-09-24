import React from "react";

type TabBtnProps = {
  children: string;
};

const TagBtn: React.FC<TabBtnProps> = ({ children }) => {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
};

export default TagBtn;
