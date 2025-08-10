import styles from "./EstimateProgress.module.css";
import ProgressCardItem from "./ProgressCardItem";
import { BsChatSquareDots } from "react-icons/bs";
import { BsTelephonePlus } from "react-icons/bs";
import { CiRuler } from "react-icons/ci";
import { CiMemoPad } from "react-icons/ci";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { RiContractLine } from "react-icons/ri";


const EstimateProgress = () => {
  return (
    <div className={styles.progress_container}>
      <div className={styles.progress_title}>
        <h2>견적 상담은 이렇게 진행되요!</h2>
        <p>
          저희 U & ME 인테리어는 처음 상담부터 시공 완료까지
          <br /> 고객님의 니즈를 반영하여 꼼꼼하게 진행합니다.
          <br /> 어떤 과정으로 진행되는지 안내해 드릴게요! 😊
        </p>
      </div>
      <div className={styles.progress_content}>
        <ProgressCardItem
          step={"Step 1"}
          title={"상담 신청"}
          content={"채팅 또는 전화로 견적 및 A/S 상담 신청합니다."}
          desc={"견적 및 A/S의 대한 상담을 진행 하게 됩니다"}
        >
          <div className={styles.icons}>
            <img src="/images/QqO2GQ1UoKzE37Z-.webp" />
          </div>
        </ProgressCardItem>
        <ProgressCardItem
          step={"Step 2"}
          title={"실측 / 고객님 요구 사항 확인"}
          content={"실측을 통해 고객님의 요구 사항을 확인합니다."}
          desc={"고객님의 요구를 반영한 맞춤 디자인을 제안합니다."}
        >
          <div className={styles.icons}>
          <img src="/images/a4Ynggh7Gc4mgfHp.webp" />
          </div>
        </ProgressCardItem>
        <ProgressCardItem
          step={"Step 3"}
          title={"인테리어 디자인 / 견적서 작성"}
          content={"디자인을 진행하고 견적서를 작성합니다."}
          desc={"디자인을 조율하여 최종 확정 후, 견적서를 작성합니다."}
        >
          <div className={styles.icons}>
            <img src="/images/YGUCSLI6jh62xp4R.webp" />
          </div>
        </ProgressCardItem>
        <ProgressCardItem
          step={"Step 4"}
          title={"계약 / 공사 시작"}
          content={"계약 진행 후 공사가 시작 됩니다."}
          desc={"계약서 작성 후 공사 계획을 안내드립니다."}
        >
          <div className={styles.icons}>
          <img src="/images/fgdbEUGmLi0rb7tY.webp" />
          </div>
        </ProgressCardItem>
      </div>
    </div>
  );
};

export default EstimateProgress;
