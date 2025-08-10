import React from "react";
import styles from "./Footer.module.css";
import FooterSubNavigation from "./FooterSubNavigation";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterSubNavigation />
      <div className={styles.inner}>
        <div className={styles.info_wrap}>
          <dl>
            <dt>이용안내</dt>
            <dd>
              <p>자주 묻는 질문</p>
              <p>홈페이지 제작 문의</p>
            </dd>
            <dd>
              <span>
                *현재 홈페이지는 그 어떠한 개인정보를 수집하고 있지 않습니다.
              </span>
            </dd>
          </dl>
        </div>
        <div className={styles.corp_wrap}>
          <dl>
            <dt>U&ME 인테리어</dt>
            <dd>
              <p>대구광역시 달서구 월배로 152 U&ME 인테리어. │ 대표이사 : 장세광</p>
              <p>연락처 : 010-4501-8729 │ 이메일 : jsk830@naver.com</p>
              <a href="https://uandme.kr/gb5/adm/" target="_blank">관리자 로그인</a>
            </dd>
            <dd className={styles.copy}>
              <p>
                ⓒ 2024 <span>U&ME 인테리어.</span> All rights reserved.{" "}
              </p>
              <p>
                Designed By <span>Junghwan.</span>
              </p>
            </dd>
          </dl>
        </div>
        <div className={styles.contact_wrap}>
          <dl>
            <dt>고객센터</dt>
            <dd>
              <p className={styles.phone}>전화번호 : 010-4501-8729</p>
              <p>운영시간 : 09:00 ~ 18:00</p>
              <p>토요일 : 10:00 ~ 15:00</p>
              <span>일요일, 공휴일은 휴무입니다.</span>
            </dd>
          </dl>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
