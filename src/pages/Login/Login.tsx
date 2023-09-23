import React from "react";
import logo from "../../assets/logo.svg";
// import style from "./Login.module.css";

const Login: React.FC = () => {
  return (
    <main>
      <div className="mainContainer">
        <img src={logo} alt="Tech Meets"></img>
        <section className="form-container">
          <h1>Entre com sua conta</h1>
          <div className="containerInput">
            <input id="email" type="text" required />
            <label className="emailLabel" htmlFor="email">
              Email
            </label>
          </div>
          <div className="containerInput">
            <input id="senha" type="text" required />
            <label className="senhaLabel" htmlFor="senha">
              Senha
            </label>
          </div>
          <div>
            <button className="btn-login">Entrar</button>
            <span> ou </span>
            <button className="btn-login">Cadastrar</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
