import { useEffect } from "react";
import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";
import styles from "./About.module.css";
import { FiAlertCircle } from "react-icons/fi";

const About = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0ddbd7f6a7442597c26d1d0b6ba03897&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(35.816041, 128.530987), // 서울 좌표
          level: 2,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const markerPosition = new window.kakao.maps.LatLng(35.816041, 128.530987);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          map: map,
        });
        const overlayContent = `
        <div style="padding: 5px 10px; background-color: white; border: 1px solid #ccc; border-radius: 5px; font-size: 14px; color: #333;">
          U&ME 인테리어
        </div>
      `;

        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition, // 텍스트 위치
          content: overlayContent, // HTML 텍스트
          yAnchor: 2.5, // 마커 위쪽에 텍스트가 뜨도록 설정
        });

        // 오버레이 지도에 추가
        customOverlay.setMap(map);
      });
    };
  }, []);

  return (
    <Contents>
      <Section attr={styles.about}>
        <div className={styles.about_main}>
          <div className={styles.inner_images}>
            <img src="/images/factory.png" />
          </div>
          <div className={styles.inner_content}>
            <p>U&ME 인테리어</p>
            <h2>
              공간을 더 아름답게,
              <br /> 당신의 생각을 담아 완성합니다.
            </h2>
            <p>
              공간을 가장 가치 있게 만드는 것을 목표로,
              <br /> 최상의 품질과 합리적인 가격을 기반으로 한 맞춤형 인테리어 솔루션을
              제공합니다.
              <br /> 고객님 요구를 세심하게 반영하여, <br />
              단순한 시공을 넘어 만족과 감동을 선사하는 공간을 창조합니다.
            </p>
          </div>
        </div>
      </Section>
      <Section attr={styles.location}>
        <div className={styles.map_container}>
          <div className={styles.location_title}>
            <h3>U&ME 인테리어 위치</h3>
            <p>
              <FiAlertCircle /> 방문 전 미리 연락을 주시면 원활한 상담이 가능합니다.
            </p>
          </div>
          <div id="map" className={styles.map}></div>
          <div className={styles.address}>
            <p>대구광역시 달서구 월배로 152 U&ME 인테리어.</p>
            <h4>대중교통 편</h4>
            <p>지하철 <span className={styles.red}>1호선</span> 월배역 3번 출구 도보 3분 거리</p>
            <p>
              버스 <span className={styles.blue}>650</span>
              <span className={styles.blue}>651</span>
              <span className={styles.blue}>836</span>
              <span className={styles.green}>달서5</span>
              <span className={styles.green}>달성2</span>
              <span className={styles.red}>급행8</span>
            </p>
          </div>
        </div>
      </Section>
    </Contents>
  );
};

export default About;
