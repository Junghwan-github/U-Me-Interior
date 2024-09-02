import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = ({ data }) => {
  return (
    <ul className={styles.nav_wrapper}>
      {data.map((menu, index) => (
        <li key={index}>
          <Link to={menu.link}>{menu.item}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
