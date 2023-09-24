import React from "react";

import "../globalStyles.css";
import style from "./TagComponent.module.css";

type TagComponentProps = {
  tag: string;
};

const TagComponent: React.FC<TagComponentProps> = ({ tag }) => {
  return <li className={style.tag}>{tag}</li>;
};

export default TagComponent;
