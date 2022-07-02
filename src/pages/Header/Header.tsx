
import Logo from "../../assets/icons/headerLogo.svg";
import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <img src={Logo} className={styles.logo} alt="logo" />
      </div>
      <div className={styles.menuWrapper}>
          <a className={styles.navItem} href={"/"}>  Node Statistic</a>        
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
  );
}
