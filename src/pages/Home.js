import React, { useState } from "react";
import styles from "./Home.module.css";
import Section from "../components/Section";
import ContentTitle from "../components/ContentTitle";

const Home = () => {
  return (
    <div className={styles.container}>
      <Section attr={styles.slick}>
        <div className={styles.inner}>
          <div className={styles.slogan}>
            <span>U&ME 인테리어</span>
            <span>최고의 퀄리티로 최저의 가격을 보장합니다.</span>
          </div>
          <div className={styles.visual}>
            <img src="/images/test-main-images.png" alt="메인이미지" />
          </div>
        </div>
      </Section>
      <Section attr={styles.recent}>
        <div className={styles.inner}>
          <ContentTitle>
            <h2>인테리어 시공 사례</h2>
            <span>아파트, 주택, 사무실 모든 인테리어 시공 사례</span>
          </ContentTitle>
        </div>
      </Section>
    </div>
  );
};

export default Home;
