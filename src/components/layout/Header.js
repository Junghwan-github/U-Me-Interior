import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import GNBNavigation from "../../data/GNBNavigation.json";
import IconNavigation from "./IconNavigation";


const Header = () => {

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {

   const handleScroll = () => {
      if(window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
  
   }
   window.addEventListener("scroll", handleScroll);
    
   return () => {
    window.removeEventListener("scroll", handleScroll);
   };

  }, [])

  

  return (
    <header id="header" className={isFixed ? `${styles.header} ${styles.fixed}`: styles.header}>
      <nav className={styles.gnb_nav}>
          <h1 className={styles.logo}>
            <Link to="/">
              <img src="/images/logo.png" alt="로고" />
            </Link>
          </h1>
          <Navigation data={GNBNavigation} isFixed={isFixed} />
          <IconNavigation />
      </nav>
    </header>
  );
};

export default Header;
