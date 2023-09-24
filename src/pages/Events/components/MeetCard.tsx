import React from "react";

import "../../../globalStyles.css";
import style from "../Events.module.css";

import { RxInfoCircled } from "react-icons/rx";
import { RxHeart } from "react-icons/rx";
// import { RxHeartFilled } from "react-icons/rx";

type MeetCardProps = {
  meetData: {
    id: number;
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
    <li>
      <section>
        <h2>{name}</h2>
        <h3>{date}</h3>
      </section>
      <ul>
        {tags.map((tag: string) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <section className={style.iconsContainer}>
        <button>
          <RxHeart />
        </button>
        <button>
          <RxInfoCircled />
        </button>
      </section>
    </li>
  );
};

export default MeetCard;
