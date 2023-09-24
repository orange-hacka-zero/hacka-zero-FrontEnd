import React from "react";
import logo from "../../assets/logo.svg";

import "../../globalStyles.css";
import style from "./Login.module.css";

const Login: React.FC = () => {
  return (
    <main className={style.mainContainer}>
      <div className={style.loginContainer}>
        <img src={logo} alt="Tech Meets"></img>
        <form className={style.formContainer}>
          <h1>Entre com sua conta</h1>
          <div className={style.inputContainer}>
            <input id="email" className="inputEl" type="text" required />
            <label className="label" htmlFor="email">
              Email
            </label>
          </div>
          <div id="password" className={style.inputContainer}>
            <input className="inputEl" type="text" required />
            <label className="label" htmlFor="password">
              Senha
            </label>
          </div>
          <div className={style.btnContainer}>
            <button className={style.btnLogin}>Entrar</button>
            <span> ou </span>
            <button className={style.btnLogin}>Cadastrar</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
