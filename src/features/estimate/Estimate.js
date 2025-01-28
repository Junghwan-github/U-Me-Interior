import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";
import styles from "./Estimate.module.css";
import EstimateForKakao from "../../components/ui/EstimateForKakao";
import EstimateSlogan from "../../components/ui/EstimateSlogan";
import EstimateForTel from "../../components/ui/EstimateForTel";
import EstimateContent from "../../components/ui/EstimateContent";

const Estimate = () => {
  return (
    <Contents>
      <Section attr={styles.slogan}>
        <EstimateSlogan />
      </Section>
      <Section attr={styles.content}>
        <EstimateContent />
      </Section>
      <Section attr={styles.estimate}>
        <EstimateForKakao />
        <EstimateForTel />
      </Section>
    </Contents>
  );
};

export default Estimate;
