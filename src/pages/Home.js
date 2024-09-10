import React, { useEffect, useState, useRef } from "react";
import styles from "./Home.module.css";
import Section from "../components/Section";
import ContentTitle from "../components/ContentTitle";
import titleData from "../data/TitleAndDescription.json";

const Home = () => {
  const [isDisplayOn, setIsDisplayOn] = useState(false);

  // 여러 요소를 담을 수 있는 배열 형태의 ref

  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // IntersectionObserver 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDisplayOn(true);
          } else {
            setIsDisplayOn(false);
          }
        });
      },
      { threshold: 0.5 } // 요소가 50% 이상 보일 때 트리거
    );

    observer.observe(ref.current);
  }, []);

  const printTitle = (i, j, item) => {
    return titleData[i].home[j][item];
  };

  return (
    <div className={styles.container}>
      <Section attr={styles.slick}>
        <div className={styles.inner}>
          <div className={styles.slogan} >
            <span
            ref={ref}
              className={
                isDisplayOn
                  ? `${styles.slogan_content} ${styles.on}`
                  : styles.slogan_content
              }
            >
              U&ME 인테리어
            </span>
            <span
            ref={ref}
              className={
                isDisplayOn
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
        <div className={styles.inner}>
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
