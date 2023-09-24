import { FC } from "react";
import { BiFilterAlt } from "react-icons/bi";

import "../../globalStyles.css";
import style from "./Events.module.css";

import TagBtn from "./components/TagBtn";
import MeetCard from "./components/MeetCard";

const Events: FC = () => {
  return (
    <main>
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
      <section className={style.eventsContainer}>
        <MeetCard />
      </section>
    </main>
  );
};

export default Events;
