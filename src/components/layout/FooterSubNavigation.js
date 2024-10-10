import React from 'react'
import styles from './FooterSubNavigation.module.css'
import { BsChevronUp } from "react-icons/bs";
import { RiCustomerServiceLine } from "react-icons/ri";
import { Link } from 'react-router-dom';




const FooterSubNavigation = () => {

  const topButton = () => {
   window.scrollTo({
    top: 0,
    behavior: "smooth"
   });
  };


  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.contact}>
          <Link to="#"><RiCustomerServiceLine /></Link>
        </div>
        <div className={styles.as_top}>
          <button type="button" onClick={topButton}><BsChevronUp /></button>
        </div>
      </div>
    </div>
  )
}

export default FooterSubNavigation;
