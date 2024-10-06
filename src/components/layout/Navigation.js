import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = ({ data, isFixed }) => {
  const [activeIndex, setActiveIndex] = useState(null); 
  // 현재 호버된 메뉴 index

  const subMenuActive = (index) => {
    setActiveIndex(index); 
    // 해당 index를 active로 설정
  };

  const subMenuInactive = () => {
    setActiveIndex(null); 
    // 마우스가 떠나면 초기화
  };


  return (
    <ul className={isFixed ? `${styles.menu_nav} ${styles.fixed}` : styles.menu_nav}>
      {data.map((menu, index) => (
        <li key={index} onMouseEnter={() => subMenuActive(index)}>
          <Link to={menu.link}>{menu.item}</Link>
          {menu.list && menu.list.length > 0 && (
            <ul
              className={
                activeIndex === index
                  ? `${styles.sub_nav} ${styles.active}`
                  : styles.sub_nav
              }
              onMouseLeave={subMenuInactive}
            >
              <span>{menu.item}</span>
              {menu.list.map((sub, index) => (
                <li key={index}>
                  <Link to={sub.href}>{sub.menu}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
