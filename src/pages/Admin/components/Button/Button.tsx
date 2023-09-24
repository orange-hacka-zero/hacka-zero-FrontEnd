import { FC } from "react";
import style from "./Button.module.css";

type TypeBtnProps = {
  title: string;
};

const Button: FC<TypeBtnProps> = ({ title }) => {
  return <button className={style.btnFormRegister}>{title}</button>;
};

export default Button;
