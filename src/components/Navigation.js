import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = ({ data }) => {
  return (
    <ul className={styles.menu_nav}>
      {data.map((menu, index) => (
        <li key={index}>
          <Link to={menu.link}>{menu.item}</Link>
          {menu.list && menu.list.length > 0 && (
            <ul className={styles.sub_nav}>
              {menu.list.map((sub, index) => (
                <li key={index}>
                  <Link to={sub.href}>{sub.menu}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
