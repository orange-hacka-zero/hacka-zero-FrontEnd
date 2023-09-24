import { FC } from "react";
import style from "./Admin.module.css";
import Button from "./components/Button/Button";
import Header from "@/components/Header";
import { RxMagnifyingGlass } from "react-icons/rx";
import CardEvent from "./components/CardEvent/CardEvent";

const Admin: FC = () => {
  return (
    <>
      <Header />
      <main className={style.containerMain}>
        <section className={style.containerSection}>
          <form className={style.containerFormRegister}>
            <section className={style.wrapperInputs}>
              <div className={style.inputContainer}>
                <input
                  id="nameEvent"
                  className={style.inputEl}
                  type="text"
                  required
                />
                <label className={style.label} htmlFor="nameEvent">
                  Nome do evento
                </label>
              </div>
              <div className={style.inputContainer}>
                <input
                  id="addressEvent"
                  className={style.inputEl}
                  type="text"
                  required
                />
                <label className={style.label} htmlFor="addressEvent">
                  Endereço (opcional)
                </label>
              </div>
              <div className={style.inputContainer}>
                <input
                  id="linkEvent"
                  className={style.inputEl}
                  type="text"
                  required
                />
                <label className={style.label} htmlFor="linkEvent">
                  Link do evento
                </label>
              </div>
            </section>

            <section className={style.asideFormRegister}>
              <div className={style.descriptionContainer}>
                <textarea
                  id="descriptionEvent"
                  className={style.descriptionEvent}
                  required
                  rows={5}
                  cols={50}
                  maxLength={500}
                />
                <label className={style.label} htmlFor="descriptionEvent">
                  Descrição
                </label>
              </div>
              <div className={style.asideFormRegisterWrapper}>
                <select className={style.selectForm}>
                  <option className={style.selectOption} disabled>
                    Modalidade
                  </option>
                  <option className={style.selectOption} value="inPerson">
                    Presencial
                  </option>
                  <option className={style.selectOption} value="online">
                    Online
                  </option>
                </select>
                <select className={style.selectForm}>
                  <option className={style.selectOption} disabled>
                    Valor
                  </option>
                  <option className={style.selectOption} value="pay">
                    Pago
                  </option>
                  <option className={style.selectOption} value="free">
                    Grátis
                  </option>
                </select>
                <input className={style.inputDate} type="date" />
              </div>
            </section>
            <Button title="Cadastrar" />
          </form>

          <h2 className={style.titleEventsRegister}>Eventos cadastrados</h2>

          <section className={style.containerRegisteredEvents}>
            <div className={style.containerSearch}>
              <input
                className={style.inputSearch}
                type="text"
                placeholder="Buscar evento"
              />
              <span className={style.elipseIcon}>
                <RxMagnifyingGlass />
              </span>
            </div>

            <div className={style.containerEventsScroll}>
              <CardEvent
                title="Encontros de Devs"
                date="24/09/2023"
                address="Avenida Sol Nascente - N: 03 - São Paulo - Capital"
                link="encontrodedevs.com.br/eventos"
                description="Participe da nossa reunião de desenvolvedores, onde temas fascinantes e palestrantes
                renomados se encontram para uma experiência imperdível na vanguarda da tecnologia.
                Junte-se a nós e explore o futuro!"
              />
              <CardEvent
                title="Encontros de Devs"
                date="24/09/2023"
                address="Avenida Sol Nascente - N: 03 - São Paulo - Capital"
                link="encontrodedevs.com.br/eventos"
                description="Participe da nossa reunião de desenvolvedores, onde temas fascinantes e palestrantes
                renomados se encontram para uma experiência imperdível na vanguarda da tecnologia.
                Junte-se a nós e explore o futuro!"
              />
              <CardEvent
                title="Encontros de Devs"
                date="24/09/2023"
                address="Avenida Sol Nascente - N: 03 - São Paulo - Capital"
                link="encontrodedevs.com.br/eventos"
                description="Participe da nossa reunião de desenvolvedores, onde temas fascinantes e palestrantes
                renomados se encontram para uma experiência imperdível na vanguarda da tecnologia.
                Junte-se a nós e explore o futuro!"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
export default Admin;
