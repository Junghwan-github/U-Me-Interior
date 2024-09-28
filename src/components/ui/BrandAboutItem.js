import React from "react";
import styles from "./BrandAboutItem.module.css";
import { Link } from "react-router-dom";
import IconRightArrow from "./IconRightArrow";
import Slider from "react-slick";

const BrandAboutItem = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
  };

  return (
    <div className={styles.content}>
      <div>
        <h2>
          U&ME 인테리어는<br></br>언제나 고객님의 행복한 공간을
          <br />
          최우선으로 생각합니다.
        </h2>
        <p>
          30년 이상의 경력을 가진 각 분야의 전문가들이 함께합니다. <br /> 직접 운영하는
          공장에서 가구를 자체 제작하여, <br />
          더욱 높은 품질의 제품을 합리적인 가격에 제공합니다.
        </p>
        <Link to="/about">
          회사소개 보기 <IconRightArrow direction={"right"} />
        </Link>
      </div>
      <div>
        <p className={styles.cover}>
          공장
          <br />
          <span>공장 직접 운영</span>
        </p>
        <div>
          <Slider {...settings}>
            <div className={styles.factory_item}>
              <img src="/images/factory.png" alt="공작 사진" />
            </div>
            <div className={styles.factory_item}>
              <img src="/images/factory3.png" alt="공작 사진" />
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <p className={styles.cover}>
          디자인
          <br />
          <span>가구 및 인테리어 도면 설계</span>
        </p>
        <img src="/images/interior3.png" alt="공작 사진" />
      </div>
      <div>
        <p className={styles.cover}>
          가구
          <br />
          <span>맞춤 가구 제작</span>
        </p>
        <img src="/images/factory2.png" alt="공작 사진" />
      </div>
      <div>
        <h2>
          모든 인테리어를 꼭 한 업체에서
          <br />
          진행하지 않아도 됩니다.
        </h2>
        <p>
          {" "}
          여러 업체에서 견적을 받아보고, <br />
          부분별로 인테리어를 진행하면
          <br />더 합리적이고 완성도 높은 결과를 얻을 수 있습니다. <br />
          맞춤형 접근으로 원하는 공간을 효율적으로 완성해보세요.{" "}
        </p>
        <Link to="/guid">
          인테리어 가이드 보기 <IconRightArrow direction={"right"} />
        </Link>
      </div>
      <div>
        <p className={styles.cover}>
          인테리어
          <br />
          <span>전문 분야별 시공 및 설치</span>
        </p>
        <div>
          <Slider {...settings}>
            <div className={styles.factory_item}>
              <img src="/images/interior.png" alt="공작 사진" />
            </div>
            <div className={styles.factory_item}>
              <img src="/images/interior5.png" alt="공작 사진" />
            </div>
            <div className={styles.factory_item}>
              <img src="/images/interior6.png" alt="공작 사진" />
            </div>
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrandAboutItem;
