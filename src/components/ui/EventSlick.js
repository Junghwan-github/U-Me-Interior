import React from "react";
import styles from "./EventSlick.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiArrowCircleRightThin, PiArrowCircleLeftThin } from "react-icons/pi";

const EventSlick = () => {
  const EventCustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={styles.event_slick_next} onClick={onClick}>
        <PiArrowCircleRightThin />
      </div>
    );
  };

  const EventCustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={styles.event_slick_prev} onClick={onClick}>
        <PiArrowCircleLeftThin />
      </div>
    );
  };

  const eventSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <EventCustomNextArrow />,
    prevArrow: <EventCustomPrevArrow />,
    appendDots: (dots) => (
      <ul
        style={{ height: "50px", bottom: "-50px", textAlign: "left", lineHeight: "60px" }}
      >
        {" "}
        {dots}{" "}
      </ul>
    ),
    customPaging: (i) => <div className={styles.event_slick_dot}></div>,
  };

  return (
    <Slider {...eventSettings}>
      <div className={styles.item}>
        <div className={styles.flex_box}>
          <div className={styles.item_images}>
            <img src="/images/3d-casual-life-discount-coupons.png" alt="할인 아이콘" />
          </div>
          <div className={styles.item_content}>
            <h3>U&ME 인테리어 GRAND OPEN</h3>
            <p>
              인테리어 시공시 다양한 혜택과, 할인이 준비되어 있습니다! 자세한 내용은 하단
              배너 버튼 Click!<br></br>앞으로 많은 성원과 관심 부탁드립니다!
            </p>
          </div>
            <button className={styles.button}>자세히 보기</button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.flex_box}>
          <div className={styles.item_images}>
            <img src="/images/3d-casual-life-discount-coupons.png" alt="할인 아이콘" />
          </div>
          <div className={styles.item_content}>
            <h3>U&ME 인테리어 GRAND OPEN</h3>
            <p>
              인테리어 시공시 다양한 혜택과, 할인이 준비되어 있습니다! 자세한 내용은 하단
              배너 버튼 Click!<br></br>앞으로 많은 성원과 관심 부탁드립니다!
            </p>
          </div>
            <button className={styles.button}>자세히 보기</button>
        </div>
      </div>
    </Slider>
  );
};

export default EventSlick;
