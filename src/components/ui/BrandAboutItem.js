import React from "react";
import styles from "./BrandAboutItem.module.css";

const BrandAboutItem = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.desc}>
        <span>Check point 1</span>
        <h3>공장을 직접 운영하고 있습니다.</h3>
        <p>
          자체 공장을 운영하여 타 업체보다 더 정교하고 세밀한 맞춤 제작이 가능하며,
          프리미엄 품질의 제품을 합리적인 가격에 제공 해드립니다.
        </p>
      </div>
      <div className={styles.content}>
          <img src="/images/factory.png" alt="공작 사진" />
      </div>
    </div>
  );
};

export default BrandAboutItem;
