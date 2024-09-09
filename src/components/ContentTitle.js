import React from "react";
import styles from "./ContentTitle.module.css";

const ContentTitle = (props) => {
    return (
        <div className={styles.title}>
            {props.children}
        </div>
    )
}

export default ContentTitle;