import styles from "./EstimateForKakao.module.css";
import { RiKakaoTalkFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";

const EstimateForKakao = () => {
  return (
    <div className={styles.kakao_container}>
      <div className={styles.inner_card}>
        <div className={styles.text_content}>
          <h2>견적문의 | A/S문의</h2>
          <p>
            견적문의 부터 A/S문의 까지 <br /> 사소한것 하나라도 언제든 편하게 말씀해 주세요!
            <br />
            최선을 다해 친절히 답변해드리겠습니다.
          </p>
          <div className={styles.button_wrapper}>
            <button type="button">
              <RiKakaoTalkFill />
              채팅 문의
            </button>
            <button type="button">
              <RiCustomerService2Fill />
              전화 문의
            </button>
          </div>
        </div>
        <div className={styles.visual_content}>
          <div className={styles.phone_back}>
            <div className={styles.content_bubble_left}>인테리어 견적 문의 드립니다!</div>
            <div className={styles.content_bubble_right}>
              <div>
                <img src="/images/factory.png" alt="공장 사진" />
              </div>
              공간을 더 아름답게, <br />
              당신의 생각을 담아 완성하는
              <br />U & ME 인테리어 입니다.
            </div>
            <div className={styles.content_bubble_left}>
              인테리어를 하고싶은데 뭐부터 해야 할지 모르겠어요 ㅠ ㅠ{" "}
            </div>
            <div className={styles.content_bubble_right}>
              걱정하지 마세요! <br />
              고객님의 스타일과 원하는 분위기에 맞춰 <br />
              최적의 인테리어를 제안해 드릴게요.
            </div>
            <div className={styles.content_bubble_left}>
              어떤 스타일이 잘 어울릴지 모르겠어요...
            </div>
            <div className={styles.content_bubble_right}>
              원하시는 컨셉이나 참고하고 싶은 이미지를 보내주시면 <br />
              맞춤형 디자인을 추천해 드릴 수 있어요. <br />
              평소 좋아하는 색감이나 분위기가 있으신가요?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateForKakao;
