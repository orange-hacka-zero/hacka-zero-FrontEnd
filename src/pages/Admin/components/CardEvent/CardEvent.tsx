import { FC } from "react";
import style from "./CardEvent.module.css";
import TagComponent from "@/components/TagComponent";

type TypeCardEventProps = {
  title: string;
  address?: string;
  link: string;
  date: string;
  description: string;
};
const CardEvent: FC<TypeCardEventProps> = ({
  title,
  address,
  link,
  date,
  description,
}) => {
  return (
    <section className={style.containerCardEvent}>
      <section className={style.cardEvent}>
        <div className={style.cardEventFirst}>
          <div>
            <h3 className={style.cardEventTitle}>{title}</h3>
            <p className={style.cardEventAddress}>{address}</p>
            <p>
              <a className={style.cardEventLink} href="/admin">
                {link}
              </a>
            </p>
          </div>

          <p className={style.cardEventData}>{date}</p>
          <div className={style.cotainertags}>
            <TagComponent tag="pago" />
            <TagComponent tag="presencial" />
          </div>
        </div>
      </section>
      <section className={style.cardEventSecondary}>
        <section className={style.cardEventInfoDescription}>
          <p> {description}</p>
        </section>
        <section className={style.containerBtn}>
          <button className={style.btnCardInfo}>Editar</button>
          <button className={style.btnCardInfo}>Excluir</button>
        </section>
      </section>
    </section>
  );
};

export default CardEvent;
