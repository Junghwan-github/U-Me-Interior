import React, { useRef } from "react";
import styles from "./Home.module.css";
import Section from "../components/Section";
import ContentTitle from "../components/ContentTitle";
import titleData from "../data/TitleAndDescription.json";
import UseIntersectionObserver from "../components/UseIntersectionObserver";

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isDisplayOn1 = UseIntersectionObserver(ref1);
  const isDisplayOn2 = UseIntersectionObserver(ref2);
  const isDisplayOn3 = UseIntersectionObserver(ref3);

  // 여러 요소를 담을 수 있는 배열 형태의 ref

  const printTitle = (i, j, item) => {
    return titleData[i].home[j][item];
  };

  return (
    <div className={styles.container}>
      <Section attr={styles.slick}>
        <div className={styles.inner}>
          <div className={styles.slogan}>
            <span
              ref={ref1}
              className={
                isDisplayOn1
                  ? `${styles.slogan_content} ${styles.on}`
                  : styles.slogan_content
              }
            >
              U&ME 인테리어
            </span>
            <span
              ref={ref2}
              className={
                isDisplayOn2
                  ? `${styles.slogan_content} ${styles.on}`
                  : styles.slogan_content
              }
            >
              최고의 퀄리티로 최저의 가격을 보장합니다.
            </span>
          </div>
          <div className={styles.visual}>
            <img src="/images/test-main-images.png" alt="메인이미지" />
          </div>
        </div>
      </Section>
      <Section attr={styles.recent}>
        <div
          ref={ref3}
          className={isDisplayOn3 ? `${styles.inner} ${styles.on}` : styles.inner}
        >
          <ContentTitle
            title={printTitle(0, 0, "title-1")}
            desc={printTitle(0, 0, "desc-1")}
          />
        </div>
      </Section>
    </div>
  );
};

export default Home;
