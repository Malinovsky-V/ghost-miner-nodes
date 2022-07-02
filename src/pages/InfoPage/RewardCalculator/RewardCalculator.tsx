import styles from "./RewardCalculator.module.css";

export default function RewardCalculator() {
  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.title}><span>Reward</span> Calculator</p>
      </div>
      <div className={styles.image} />
    </div>
  );
}
