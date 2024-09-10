import React from "react";
import styles from "./ContentTitle.module.css";

const ContentTitle = ({title, desc}) => {
    return (
        <div className={styles.title}>
          <h2>{title}</h2>
          <span>{desc}</span>
        </div>
    )
}

export default ContentTitle;