import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Navigation from "../components/Navigation";
import GNBNavigation from "../data/GNBNavigation.json";
import IconNavigation from "../components/IconNavigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.gnb_nav}>
        <div className={styles.members}>
          <ul className={styles.members_nav}>
            <li>
              <Link to="/">로그인</Link>
            </li>
            <li>
              <Link to="/">회원가입</Link>
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h1 className={styles.logo}>
            <Link to="/">
              <img src="/images/logo.png" alt="로고" />
            </Link>
          </h1>
          <Navigation data={GNBNavigation} />
          <IconNavigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;
