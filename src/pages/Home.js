import React, { useRef } from "react";
import styles from "./Home.module.css";
import Section from "../components/Section";
import ContentTitle from "../components/ContentTitle";
import titleData from "../data/TitleAndDescription.json";
import UseIntersectionObserver from "../components/UseIntersectionObserver";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isDisplayOn1 = UseIntersectionObserver(ref1);
  const isDisplayOn2 = UseIntersectionObserver(ref2);
  const isDisplayOn3 = UseIntersectionObserver(ref3);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    waitForAnimate: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  const printTitle = (i, j, item) => {
    return titleData[i].home[j][item];
  };

  return (
    <div className={styles.container}>
      <Section attr={styles.visual}>
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

          <span className={styles.scroll_icon}>Scroll Down</span>

          <div className={styles.slick}>
            <Slider {...settings}>
              <div className={styles.slick_box}>
                <img src="/images/pexels-fotoaibe-1643384.jpg" alt="메인이미지" />
              </div>
              <div className={styles.slick_box}>
                <img src="/images/pexels-heyho-6283962.jpg" alt="메인이미지" />
              </div>
              <div className={styles.slick_box}>
                <img src="/images/test-main-images.png" alt="메인이미지" />
              </div>
            </Slider>
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
        </div>
      </Section>
    </div>
  );
};

export default Home;
