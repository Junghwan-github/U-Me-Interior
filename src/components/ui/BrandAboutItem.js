import React from "react";
import styles from "./BrandAboutItem.module.css";
import { Link } from "react-router-dom";
import IconRightArrow from "./IconRightArrow";

const BrandAboutItem = () => {
  return (
    <div className={styles.content}>
      <div>
        <h2>
          U&ME 인테리어는<br></br>언제나 고객님의 행복한 공간을<br />최우선으로
          생각합니다.
        </h2>
        <p>
          30년 이상의 경력을 가진 각 분야의 전문가들이 함께합니다. <br /> 직접 운영하는
          공장에서 가구를 자체 제작하여, <br />더욱 높은 품질의 제품을 합리적인 가격에
          제공합니다.
        </p>
        <Link to="/about">
          회사소개 보기 <IconRightArrow direction={"right"} />
        </Link>
      </div>
      <div>
        <img src="/images/factory.png" alt="공작 사진" />
      </div>
      <div>
        <img src="/images/factory3.png" alt="공작 사진" />
      </div>
      <div>
        <img src="/images/factory2.png" alt="공작 사진" />
      </div>
      <div>
        <h2>
         한 업체에서 모든 인테리어를 <br />다 하지 않아도 되요!
        </h2>
        <p>
          모든 인테리어를 꼭 한 업체에서만 하실 필요는 없어요.
          <br />
          업체별 여기 저기 견적을 부분별 확인해보신후, <br /> 보다 저렴하고 합리적인 가격에 인테리어가 가능합니다.
        </p>
        <Link to="/guid">
          인테리어 가이드 보기 <IconRightArrow direction={"right"} />
        </Link>
      </div>
      <div>
        <img src="/images/factory3.png" alt="공작 사진" />
      </div>
    </div>
  );
};

export default BrandAboutItem;
