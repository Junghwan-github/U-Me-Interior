import React from 'react'
import styles from './ContentItems.module.css';

const ContentItems = () => {
  return (
    <div className={styles.item_inner}>
            <div className={styles.item_box}>
              <div className={styles.item_thumb}></div>
              <div className={styles.item_content}>
                <h4>테스트 동 테스트 아파트 48평형</h4>
                <p className={styles.item_category}>
                  <span>도배</span>
                  <span>장판</span>
                  <span>욕실</span>
                  <span>타일</span>
                  <span>싱크대</span>
                </p>
                <p className={styles.item_price}>
                  <strong>3,000</strong>
                  <span>만원</span>
                </p>
              </div>
            </div>
            <div className={styles.item_box}>
              <div className={styles.item_thumb}></div>
              <div className={styles.item_content}>
                <h4>테스트 동 테스트 아파트 48평형</h4>
                <p className={styles.item_category}>
                  <span>도배</span>
                  <span>장판</span>
                  <span>욕실</span>
                  <span>타일</span>
                  <span>싱크대</span>
                </p>
                <p className={styles.item_price}>
                  <strong>3,000</strong>
                  <span>만원</span>
                </p>
              </div>
            </div>
            <div className={styles.item_box}>
              <div className={styles.item_thumb}></div>
              <div className={styles.item_content}>
                <h4>테스트 동 테스트 아파트 48평형</h4>
                <p className={styles.item_category}>
                  <span>도배</span>
                  <span>장판</span>
                  <span>욕실</span>
                  <span>타일</span>
                  <span>싱크대</span>
                </p>
                <p className={styles.item_price}>
                  <strong>3,000</strong>
                  <span>만원</span>
                </p>
              </div>
            </div>
          </div>
  )
}

export default ContentItems;