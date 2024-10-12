import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";
import styles from "./About.module.css";

const About = () => {
  return (
    <Contents>
      <Section attr={styles.about}>
        <div className={styles.ceo}></div>
        <div className={styles.inner}>
          <div className={styles.intro}>
            <h1>U&ME 인테리어는 고객의 요구사항을 최우선으로 생각합니다.</h1>
            <p>
              고객님의 공간을 가장 가치 있게 만드는 것을 목표로,{" "}
              <span>최상의 품질과 합리적인 가격</span>을 기반으로 한{" "}
              <span>맞춤형 인테리어 솔루션</span>을 제공합니다.
              <br />
              고객 한 분 한 분의 요구를 세심하게 반영하여,
              <span> 단순한 시공을 넘어 만족과 감동을 선사하는 공간</span>을 창조합니다.
            </p>
          </div>
        </div>
      </Section>
      <Section attr={styles.creed}>
        <div className={styles.inner}>
          <div className={styles.card}>
            <div className={styles.image}>

            </div>
            <div className={styles.content}>
              <h2>
                공간의 대한 가치
              </h2>
              <p>
                고객님의 공간의 가치를 가장 잘 이해하며, <br />디자인과 시공을 합니다.
                블라 블라 블라 블라 블라 
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>

            </div>
            <div className={styles.content}>
              <h2>
                공간의 대한 가치
              </h2>
              <p>
                고객님의 공간의 가치를 가장 잘 이해하며, <br />디자인과 시공을 합니다.
                블라 블라 블라 블라 블라 
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>

            </div>
            <div className={styles.content}>
              <h2>
                공간의 대한 가치
              </h2>
              <p>
                고객님의 공간의 가치를 가장 잘 이해하며, <br />디자인과 시공을 합니다.
                블라 블라 블라 블라 블라 
              </p>
            </div>
          </div>
         
        </div>
      </Section>
    </Contents>
  );
};

export default About;
