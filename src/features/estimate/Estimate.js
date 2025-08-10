import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";
import styles from "./Estimate.module.css";
import EstimateForKakao from "../../components/ui/EstimateForKakao";
import EstimateSlogan from "../../components/ui/EstimateSlogan";
import EstimateForTel from "../../components/ui/EstimateForTel";
import EstimateContent from "../../components/ui/EstimateContent";
import EstimateProgress from "../../components/ui/EstimateProgress";
import EstimateAbout from "../../components/ui/EstimateAbout";

const Estimate = () => {
  return (
    <Contents>
      <Section attr={styles.slogan}>
        <EstimateSlogan />
      </Section>
      <Section attr={styles.estimate}>
        <EstimateForKakao />
      </Section>
      <Section attr={styles.progress}>
        <EstimateProgress />
      </Section>
      <Section attr={styles.about}>
        <EstimateAbout />
      </Section>
    </Contents>
  );
};

export default Estimate;
