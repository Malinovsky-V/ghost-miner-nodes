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
          <div className={styles.inputContainer}>
            <InputWithButton
              type="check"
              placeholder="Enter your Node Public key"
              textButton="Check"
            />
          </div>
          <div className={styles.backgroundLines} />
        </div>
        <div className={styles.imageBlock}>
          <div className={styles.boxesImage} />
          <div className={styles.backgroundEllipse} />
        </div>
      </div>
      {false && <Traffic />}
    </div>
  );
}
