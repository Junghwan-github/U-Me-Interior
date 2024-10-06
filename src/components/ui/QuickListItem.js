import React from "react";
import styles from './QuickListItem.module.css';


const QuickListItem = () => {

  const data = [
    {
      title: "인테리어 가이드",
      desc: "인테리어 준비 부터 셀프 인테리어 꿀팁 공유!",
      icon: "3d-casual-life-idea-lamp-over-an-open-book.png",
      alt: "인테리어 가이드"
    },
    {
      title: "시공 견적 문의",
      desc: "부담없이 채팅으로 문의가 가능해요!",
      icon: "3d-casual-life-speech-bubbles.png",
      alt: "인테리어 견적문의"
    },
    {
      title: "A/S 신청",
      desc: "최대한 빨리 완벽하게 처리 해드릴께요!",
      icon: "3d-casual-life-smart-car.png",
      alt: "인테리어 A/S 신청"
    }
  ]

  return (
    <>
    {data.map((item, index) => (
      <div key={index} className={styles.quick_item}>
        <div className={styles.quick_icon}>
          <img src={`images/${item.icon}`} alt={item.alt} />
        </div>
        <div className={styles.quick_content}>
          <h5>{item.title}</h5>
          <p>{item.desc}</p>
        </div>
      </div>
    ))}
    </>
  );
};

export default QuickListItem;
