import { FC } from "react";
import { BiFilterAlt } from "react-icons/bi";

import "../../globalStyles.css";
import style from "./Events.module.css";

import TagBtn from "./components/TagBtn";
import MeetCard from "./components/MeetCard";

const Events: FC = () => {
  const meetData = {
    id: 1,
    name: "Encontro de Devs",
    date: "24/09/2023",
    tags: ["pago", "presencial"],
    details:
      "Participe da nossa reunião de desenvolvedores, onde temas fascinantes e palestrantes   renomados se encontram para uma experiência imperdível na vanguarda da tecnologia.    Junte-se a nós e explore o futuro!",
    address: "Avenida Sol Nascente - N: 03 - São Paulo - Capital",
    link: "encontrodedevs011.com.br/events",
  };
  return (
    <main className={style.mainContainer}>
      <h1>Eventos</h1>
      <section className={style.filtersContainer}>
        <BiFilterAlt />
        <ul className={style.filtersListContainer}>
          <TagBtn>Pagos</TagBtn>
          <TagBtn>Grátis</TagBtn>
          <TagBtn>Onlines</TagBtn>
          <TagBtn>Presenciais</TagBtn>
        </ul>
      </section>
      <ul className={style.eventsContainer}>
        <MeetCard meetData={meetData} />
      </ul>
    </main>
  );
};

export default Events;
