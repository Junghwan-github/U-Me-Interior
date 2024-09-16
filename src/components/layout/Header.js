import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import GNBNavigation from "../../data/GNBNavigation.json";
import IconNavigation from "./IconNavigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.gnb_nav}>
          <h1 className={styles.logo}>
            <Link to="/">
              <img src="/images/logo.png" alt="로고" />
            </Link>
          </h1>
          <Navigation data={GNBNavigation} />
          <IconNavigation />
      </nav>
    </header>
  );
};

export default Header;
