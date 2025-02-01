import React from "react";
import styles from "./IconNavigation.module.css";
import { RiCustomerServiceLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const IconNavigation = () => {
  return (
    <ul className={styles.icon_navigation}>
      <li className={styles.gnb_tel}>
        <a href="tel:01045018729">
          <RiCustomerServiceLine />
          <span>010-4501-8729</span>
        </a>
      </li>
      <li className={styles.mobile_menu}>
        <Link to="/">
          <RxHamburgerMenu />
        </Link>
      </li>
    </ul>
  );
};

export default IconNavigation;
