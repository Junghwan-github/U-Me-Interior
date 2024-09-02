import React from "react";
import styles from "./Header.module.css";
import Navigation from "../components/Navigation";
import GNBNavigation from "../data/GNBNavigation.json";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <h1 className={styles.logo}>
          <img src="/images/logo.png" alt="로고" />
          {/* <span>인테리어</span> */}
        </h1>
        <Navigation data={GNBNavigation} />
      </nav>
    </header>
  );
};

export default Header;
