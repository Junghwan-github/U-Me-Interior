import React from "react";
import styles from "./Footer.module.css";
import FooterSubNavigation from "./FooterSubNavigation";


const Footer = () => {

  return (
    <footer className={styles.footer} >
      <FooterSubNavigation />
      <div className={styles.inner}>
        <p>ⓒ 2024 U&ME 인테리어. </p>
      </div>
    </footer>
  );
};

export default Footer;
