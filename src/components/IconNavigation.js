import React from "react";
import styles from "./IconNavigation.module.css";
import { RiCustomerServiceLine } from "react-icons/ri";
import { Link } from "react-router-dom";



const IconNavigation = () => {
  return (
    <ul className={styles.icon_navigation}>
      <li>
        <Link to="/">
          <RiCustomerServiceLine />
        </Link>
      </li>
    </ul>
  );
};


export default IconNavigation;