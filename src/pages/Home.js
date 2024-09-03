import React from "react";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <section id="section_slider" className={styles.main_contents}>
          <div className={styles.inner}>
            <img src="/images/pexels-fotoaibe-1571458.jpg" alt="메인이미지" />
          </div>
        </section>
    )
}

export default Home;