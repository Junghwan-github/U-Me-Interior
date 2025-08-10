import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import GNBNavigation from "../../data/GNBNavigation.json";
import IconNavigation from "./IconNavigation";
import { IoMdClose } from "react-icons/io";
import { RiCustomerServiceLine } from "react-icons/ri";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      id="header"
      className={isFixed ? `${styles.header} ${styles.fixed}` : styles.header}
    >
      <nav className={styles.gnb_nav}>
        <h1 className={styles.logo}>
          <Link to="/">
            <img src="/images/logo.png" alt="로고" />
          </Link>
        </h1>
        <Navigation data={GNBNavigation} isFixed={isFixed} />
        <IconNavigation isActive={isActive} setIsActive={setIsActive} />
      </nav>
      <div
        className={isActive ? `${styles.mobile_gnb} ${styles.active}` : styles.mobile_gnb}
      >
        {isActive && (
          <div className={styles.mobile_gnb_container}>
            <div className={styles.mobile_gnb_header}>
            <button type="button" onClick={toggleHamburger} className={styles.mobile_gnb_close}>
              <IoMdClose />
            </button>
            </div>
            <ul className={styles.icon_navigation}>
              <li className={styles.gnb_tel}>
                <a href="tel:01045018729">
                  <RiCustomerServiceLine />
                  <span>010-4501-8729</span>
                </a>
              </li>
            </ul>
            <Navigation data={GNBNavigation} isFixed={isFixed} isActive={isActive} toggleHamburger={toggleHamburger} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
