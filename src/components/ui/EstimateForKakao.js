import styles from "./EstimateForKakao.module.css";
import { RiKakaoTalkFill } from "react-icons/ri";

const EstimateForKakao = () => {
  return (
    <div className={styles.kakao_container}>
      <div className={styles.inner_card}>
        <p>부담없이 카카오 채팅으로 문의가 가능해요!</p>
        <button type="button">
          <RiKakaoTalkFill />
          카카오 채팅 문의
        </button>
      </div>
    </div>
  );
};

export default EstimateForKakao;
