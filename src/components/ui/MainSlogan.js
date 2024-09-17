import React, { useRef } from 'react'
import styles from './MainSlogan.module.css'
import UseIntersectionObserver from '../../hooks/UseIntersectionObserver';


const MainSlogan = ({title, desc}) => {

const ref1 = useRef(null);
const ref2 = useRef(null);


const isDisplayOn1 = UseIntersectionObserver(ref1);
const isDisplayOn2 = UseIntersectionObserver(ref2);
  return (
    <div className={styles.slogan}>
    <span
      ref={ref1}
      className={
        isDisplayOn1
          ? `${styles.slogan_content} ${styles.on}`
          : styles.slogan_content
      }
    >
      {title}
    </span>
    <span
      ref={ref2}
      className={
        isDisplayOn2
          ? `${styles.slogan_content} ${styles.on}`
          : styles.slogan_content
      }
    >
      {desc}
    </span>
  </div>
  )
}

export default MainSlogan;