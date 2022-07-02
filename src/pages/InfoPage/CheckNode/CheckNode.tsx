import InputWithButton from "../../../components/InputWithButton/InputWithButton";
import styles from "./CheckNode.module.css";
import Traffic from "./Traffic";

export default function CheckNode() {
  return (
    <div>
    <div className={styles.gridWrapper}>
      <div className={styles.checkBlock}>
        <div>
        <p className={styles.titleOne}>
          <span className={styles.spanOne}>Check</span> your{" "}
          <span className={styles.spanTwo}>Node</span>
        </p>
        <p className={styles.titleTwo}>statistic and rewars</p>
        </div>
        <InputWithButton type="submit" placeholder="Enter your Node Public key" />
      </div>
      <div className={styles.image} />
    </div>
    {true && <Traffic />}
    </div>
  );
}
