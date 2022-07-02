import InputWithButton from "../../components/InputWithButton/InputWithButton";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.emailBlock}>
        <div className={styles.iconInEmailBlock}></div>
        <p>
          A fast, secure, and highly scalable blockchain platform for
          distributed apps, enterprise use cases, and the new internet economy.
        </p>
        <div>
          <InputWithButton
            type="submit"
            placeholder="Enter your email"
            textButton="subsribe"
          />
        </div>
      </div>
      <div>
        <div className={styles.navMenuWrapper}>
          <a className={styles.navItem} href={"/"}>
            Node Statistic
          </a>
          <a className={styles.navItem} href={"/your-node"}>
            Your Node
          </a>
          <a className={styles.navItem} href={"/calculator"}>
            Calculator
          </a>
          <a className={styles.navItem} href={"/what-we-doing"}>
            What we doing
          </a>
        </div>
      </div>
      <div className={styles.joinUsBlock}>
        <p className={styles.joinUsTitle}>Join us</p>
        <div className={styles.socialIconsContainer}>
          <div className={styles.mSocialIcon}></div>
          <div className={styles.telegramIcon}></div>
          <div className={styles.gitHubIcon}></div>
          <div className={styles.twitterIcon}></div>
        </div>
        <div className={styles.usefulPages}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Code of Conduct</a>
        </div>
      </div>
    </div>
  );
}
