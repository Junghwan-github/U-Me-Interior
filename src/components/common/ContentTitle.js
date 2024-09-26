import React from "react";
import styles from "./ContentTitle.module.css";
import IconRightArrow from '../ui/IconRightArrow';

const ContentTitle = ({ title, desc, link }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      <span>{desc}</span>
      <div className={styles.more}>
        <a href={link}>
          더보기  <IconRightArrow direction={"right"}/>
        </a>
      </div>
    </div>
  );
};

export default ContentTitle;
