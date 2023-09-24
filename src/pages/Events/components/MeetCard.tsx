import React from "react";

import "../../../globalStyles.css";
import style from "./MeetCard.module.css";

import { RxInfoCircled } from "react-icons/rx";
import { RxHeart } from "react-icons/rx";
// import { RxHeartFilled } from "react-icons/rx";

type MeetCardProps = {
  meetData: {
    name: string;
    date: string;
    tags: string[];
    details: string;
    link: string;
  };
};
const MeetCard: React.FC<MeetCardProps> = ({ meetData }) => {
  const { name, date, tags } = meetData;
  return (
    <li className={style.mainContainer}>
      <section className={style.mainInfoContainer}>
        <h2 className={`${style.mainInfo} ${style.name}`}>{name}</h2>
        <h2 className={`${style.mainInfo} ${style.date}`}>{date}</h2>
      </section>
      <ul className={style.wrapper}>
        {tags.map((tag: string) => (
          <li key={tag} className={style.tag}>
            {tag}
          </li>
        ))}
      </ul>
      <section className={style.wrapper}>
        <button className={style.iconBtn}>
          <RxHeart className={style.icon} />
        </button>
        <button className={style.iconBtn}>
          <RxInfoCircled className={style.icon} />
        </button>
      </section>
    </li>
  );
};

export default MeetCard;
