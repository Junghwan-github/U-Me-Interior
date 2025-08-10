import styles from "./EstimateAbout.module.css";
import IconRightArrow from "./IconRightArrow";
import { useNavigate } from "react-router-dom";

const EstimateAbout = () => {
const navigate = useNavigate();

const goAbout = () => {
  navigate("/about");
}

  return (
    <div className={styles.estimate_about_container}>
      <div className={styles.inner_images}>
        <img src="/images/factory.png" />
      </div>
      <div className={styles.inner_content}>
        <h2>U&ME 인테리어</h2>
        <p>공간을 더 아름답게, 당신의 생각을 담아 완성합니다.</p>
        <button type="button" onClick={goAbout}>회사소개 보기<IconRightArrow direction={"right"}/></button>
      </div>
    </div>
  )
}

export default EstimateAbout;