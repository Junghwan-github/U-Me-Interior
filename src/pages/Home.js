import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <section id="section_slider" className={styles.section_slider}>
        <div className={styles.inner}>
          <div className={styles.slogan_content}>
            <span>
              U&ME 인테리어<br></br> 최고의 퀄리티로 최저의 가격을 보장합니다.
            </span>
          </div>
        </div>
        <div className={styles.visual}>
          <img src="/images/test-main-images.png" alt="메인이미지" />
        </div>
      </section>
      <section id="section_recent" className={styles.section_recent}>
        <div className={styles.inner}>
          <h2>인테리어 시공 사례</h2>
          <span>아파트, 주택, 사무실 모든 인테리어 시공 사례</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
