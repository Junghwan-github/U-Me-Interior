import React from "react";
import { BsChevronRight } from "react-icons/bs";
import styles from "./ContentTitle.module.css";

const ContentTitle = ({ title, desc, link }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      <span>{desc}</span>
      <div className={styles.more}>
        <a href={link}>
          더보기 <BsChevronRight />
        </a>
      </div>
    </div>
  );
};

export default ContentTitle;
