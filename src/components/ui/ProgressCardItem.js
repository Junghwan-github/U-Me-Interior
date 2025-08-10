import styles from "./ProgressCardItem.module.css";

const ProgressCardItem = ({ step, title, content, children, desc }) => {
  return (
    <div className={styles.card_item_container}>
      <div className={styles.title}>
        <h3>{step}</h3>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <div className={styles.visual}>{children}</div>
      <div className={styles.desc}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProgressCardItem;
