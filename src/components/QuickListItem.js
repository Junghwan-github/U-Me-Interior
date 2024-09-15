import React from "react";
import styles from './QuickListItem.module.css';


const QuickListItem = () => {
  return (
    <>
      <div className={styles.quick_item}>
        <div className={styles.quick_icon}>
          <img src="/images/3d-casual-life-glasses-on-books.png" alt="인테리어 가이드" />
        </div>
        <div className={styles.quick_content}>
          <h5>인테리어 가이드</h5>
          <p>인테리어 준비 부터 셀프 인테리어 꿀팁 공유!</p>
        </div>
      </div>
      <div className={styles.quick_item}>
        <div className={styles.quick_icon}>
          <img src="/images/3d-casual-life-digital-subscription-window.png" alt="인테리어 견적문의" />
        </div>
        <div className={styles.quick_content}>
          <h5>시공 견적 문의</h5>
          <p>부담없이 카카오톡 채팅 문의가 가능해요!</p>
        </div>
      </div>
      <div className={styles.quick_item}>
        <div className={styles.quick_icon}>
          <img src="/images/3d-casual-life-tool-box.png" alt="인테리어 A/S신청" />
        </div>
        <div className={styles.quick_content}>
          <h5>A/S 신청</h5>
          <p>최대한 빨리 완벽하게 처리 해드릴께요!</p>
        </div>
      </div>
    </>
  );
};

export default QuickListItem;
