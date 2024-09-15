import React, { useRef } from "react";
import styles from "./Home.module.css";
import Section from "../components/Section";
import ContentTitle from "../components/ContentTitle";
import titleData from "../data/TitleAndDescription.json";
import UseIntersectionObserver from "../components/UseIntersectionObserver";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentItems from "../components/ContentItems";
import QuickListItem from "../components/QuickListItem";

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const isDisplayOn1 = UseIntersectionObserver(ref1);
  const isDisplayOn2 = UseIntersectionObserver(ref2);
  const isDisplayOn3 = UseIntersectionObserver(ref3);
  const isDisplayOn4 = UseIntersectionObserver(ref4);
  const isDisplayOn5 = UseIntersectionObserver(ref5);

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
            title={printTitle(0, 0, "recent-title")}
            desc={printTitle(0, 0, "recent-desc")}
            link={printTitle(0, 0, "recent-link")}
          />
          <ContentItems />
        </div>
      </Section>
      <Section attr={styles.event}>
        <div
          ref={ref5}
          className={isDisplayOn5 ? `${styles.inner} ${styles.on}` : styles.inner}
        >
          <ContentTitle
            title={printTitle(0, 1, "event-title")}
            desc={printTitle(0, 1, "event-desc")}
            link={printTitle(0, 1, "event-link")}
          />

          <div className={styles.event_item}>
            <div>
            </div>
          </div>
        </div>
      </Section>
      <Section attr={styles.quick}>
        <div className={styles.inner}>
          <div
            ref={ref4}
            className={
              isDisplayOn4 ? `${styles.quick_list} ${styles.on}` : styles.quick_list
            }
          >
            <QuickListItem />
          </div>
        </div>
      </Section>

    </div>
  );
};

export default Home;
