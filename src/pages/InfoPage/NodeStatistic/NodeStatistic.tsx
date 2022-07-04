import styles from "./NodeStatistic.module.css";

export default function NodeStatistic() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>
          Node <span>Statistic</span>
        </h3>
      </div>
      <div className={styles.dataBlock}>
        <div className={styles.firstDataBlock}>
          <div className={styles.topLine}></div>
          <div className={styles.bottomLine}></div>
          <p>
            455 <span>peers</span>
          </p>
        </div>
        <div className={styles.secondDataBlock}>
          <span>Hosting</span>
          <span>Network health</span>
          <p>23.43TB</p>
          <p>Good</p>
        </div>
      </div>

      <div className={styles.image}></div>
      <div className={styles.dottedMapLine}></div>
    </div>
  );
}
