import React, { useState } from "react";
import styles from "./IconNavigation.module.css";
import { RiCustomerServiceLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const IconNavigation = ({isActive, setIsActive}) => {
  

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <ul className={styles.icon_navigation}>
      <li className={styles.gnb_tel}>
        <a href="tel:01045018729">
          <RiCustomerServiceLine />
          <span>010-4501-8729</span>
        </a>
      </li>
      <li className={styles.mobile_menu}>
        <button type="button" onClick={toggleHamburger} className={styles.mobile_gnb_button}>
          <RxHamburgerMenu />
        </button>
      </li>
    </ul>
  );
};

export default IconNavigation;
