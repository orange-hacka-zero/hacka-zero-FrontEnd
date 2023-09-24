import { FC } from "react";
import { BiFilterAlt } from "react-icons/bi";

import "../../globalStyles.css";
import style from "./Events.module.css";

import Header from "../../components/Header";
import TagBtn from "./components/TagBtn";
import MeetCard from "./components/MeetCard";

const Events: FC = () => {
  const meetData = {
    name: "Encontro de Devs",
    date: "24/09/2023",
    tags: ["pago", "presencial"],
    details:
      "Participe da nossa reunião de desenvolvedores, onde temas fascinantes e palestrantes   renomados se encontram para uma experiência imperdível na vanguarda da tecnologia.    Junte-se a nós e explore o futuro!",
    address: "Avenida Sol Nascente - N: 03 - São Paulo - Capital",
    link: "encontrodedevs011.com.br/events",
  };
  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <section className={style.contentWrapper}>
          <h1 className={style.mainTitle}>Eventos</h1>
          <section className={style.filtersContainer}>
            <BiFilterAlt className={style.filterIcon} />
            <ul className={style.filtersListContainer}>
              <TagBtn>Pagos</TagBtn>
              <TagBtn>Grátis</TagBtn>
              <TagBtn>Onlines</TagBtn>
              <TagBtn>Presenciais</TagBtn>
            </ul>
          </section>
          <ul className={style.eventsContainer}>
            <MeetCard meetData={meetData} />
            <MeetCard meetData={meetData} />
            <MeetCard meetData={meetData} />
          </ul>
        </section>
      </main>
    </>
  );
};

export default Events;
