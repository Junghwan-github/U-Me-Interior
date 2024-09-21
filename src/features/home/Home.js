import React, { useRef } from "react";
import styles from "./Home.module.css";
import Section from "../../components/layout/Section";
import ContentTitle from "../../components/common/ContentTitle";
import titleData from "../../data/TitleAndDescription.json";
import UseIntersectionObserver from "../../hooks/UseIntersectionObserver";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentItems from "../../components/ui/ContentItems";
import QuickListItem from "../../components/ui/QuickListItem";
import Contents from "../../components/layout/Contents";
import MainSlogan from "../../components/ui/MainSlogan";
import ScrollDownIcon from "../../components/ui/ScrollDownIcon";
import EventSlick from "../../components/ui/EventSlick";



const Home = () => {
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const isDisplayOn3 = UseIntersectionObserver(ref3);
  const isDisplayOn4 = UseIntersectionObserver(ref4);
  const isDisplayOn5 = UseIntersectionObserver(ref5);

  const visaulSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  const resultTitle = (i, j, item) => {
    return titleData[i].home[j][item];
  };

  return (
    <Contents>
      <Section attr={styles.visual}>
        <div className={styles.inner}>
          <MainSlogan
            title="U&ME 인테리어"
            desc="최고의 퀄리티로 최저의 가격을 보장합니다."
          />
          <ScrollDownIcon />

          <div className={styles.slick}>
            <Slider {...visaulSettings}>
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
            title={resultTitle(0, 0, "recent-title")}
            desc={resultTitle(0, 0, "recent-desc")}
            link={resultTitle(0, 0, "recent-link")}
          />
          <ContentItems />
        </div>
      </Section>
      <Section attr={styles.event}>
        <div
          ref={ref4}
          className={isDisplayOn4 ? `${styles.inner} ${styles.on}` : styles.inner}
        >
          <ContentTitle
            title={resultTitle(0, 1, "event-title")}
            desc={resultTitle(0, 1, "event-desc")}
            link={resultTitle(0, 1, "event-link")}
          />
          <div className={styles.event_slick}>
            <EventSlick />
          </div>
        </div>
      </Section>
      <Section attr={styles.quick}>
        <div className={styles.inner}>
          <div
            ref={ref5}
            className={
              isDisplayOn5 ? `${styles.quick_list} ${styles.on}` : styles.quick_list
            }
          >
            <QuickListItem />
          </div>
        </div>
      </Section>
    </Contents>
  );
};

export default Home;
