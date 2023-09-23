import React from "react";
import logo from "../../assets/logo.svg";
import style from "./Login.module.css";

const Login: React.FC = () => {
  return (
    <main>
      <div className="mainContainer">
        <img src={logo} alt="Tech Meets"></img>
        <form className="form-container">
          <h1>Entre com sua conta</h1>
          <div className={style.containerInput}>
            <input id="email" className={style.inputEl} type="text" required />
            <label className={style.label} htmlFor="email">
              Email
            </label>
          </div>
          <div id="password" className={style.containerInput}>
            <input className={style.inputEl} type="text" required />
            <label className={style.label} htmlFor="password">
              Senha
            </label>
          </div>
          <div>
            <button className="btn-login">Entrar</button>
            <span> ou </span>
            <button className="btn-login">Cadastrar</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
