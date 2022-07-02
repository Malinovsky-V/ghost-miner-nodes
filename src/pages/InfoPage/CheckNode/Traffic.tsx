import styles from "./Traffic.module.css";

export default function Traffic() {
  return (
    <div>
      <div className={styles.firstBlock}>
        <div>
          <p className={styles.title}>Network traffic</p>
          <div className={styles.speedometersBlock}>
            <div className={styles.outgoing} />
            <div className={styles.incoming} />
          </div>
        </div>
        <div>
          <p className={styles.title}> Title without name</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <p>Green</p> <span>Node heaith</span>
            </div>
            <div className={styles.box}>
              <p>0.17</p> <span>IPFS ver</span>
            </div>
            <div className={styles.box}>
              <p>0.0.0.1</p>
              <span>UI ver</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scheduleImage} />
      <div className={styles.accuredRewardsBlock}>
        <p className={styles.title}>Accrued Rewards</p>
      </div>
    </div>
  );
}
