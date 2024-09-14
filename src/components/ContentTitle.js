import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "./ContentTitle.module.css";

const ContentTitle = ({ title, desc, link }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      <span>{desc}</span>
      <div className={styles.more}>
        <a href={link}>
          더보기 <BsArrowRight />
        </a>
      </div>
    </div>
  );
};

export default ContentTitle;
