import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";
import styles from './About.module.css';

const About = () => {
  return(
    <Contents>
      <Section attr={styles.about}>
        <div className={styles.inner}>

        </div>
      </Section>
    </Contents>
  )

}

export default About;