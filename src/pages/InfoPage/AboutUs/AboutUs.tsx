import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        What <span>we</span> doing
      </p>
      <div className={styles.informationBlocks}>
        <div className={styles.informationBlock}>
          <div className={styles.icon}></div>
          <p className={styles.titleBlock}>Store {`\n`} Secure Data</p>
          <span className={styles.description}>
            Use your avatar on Telegram and other compatible apps.
          </span>
        </div>
        <div className={styles.informationBlock}>
          <div className={styles.icon}></div>
          <p className={styles.titleBlock}>Сonvenient {`\n`} File Sharing</p>
          <span className={styles.description}>
            You get multi-factor approach to security, where authentication
            depends on five factors
          </span>
        </div>
        <div className={styles.informationBlock}>
          <div className={styles.icon}></div>
          <p className={styles.titleBlock}>Collaboration{`\n`} Opportunities</p>
          <span className={styles.description}>
            Thanks to the CPU you can download applications to the avatar
          </span>
        </div>
      </div>
    </div>
  );
}
