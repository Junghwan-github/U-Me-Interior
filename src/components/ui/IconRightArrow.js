import React from 'react'
import styles from './IconRightArrow.module.css';

const IconRightArrow = ({direction}) => {
  return(
    <i className={styles[direction]}>
      <span className={styles.parent}><span className={styles.child}></span></span>
      
    </i>
  )
}

export default IconRightArrow;