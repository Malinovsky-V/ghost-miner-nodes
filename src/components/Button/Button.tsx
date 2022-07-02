import styles from "./button.module.css";

type ButtonProps = {
  children: string;
  type: string;
};

export default function Button({ children, type }: ButtonProps) {
  return (
    <div className={`${styles[`wrapper-${type}`]} ${styles.wrapper}`}>
      <button className={`${styles[`button-${type}`]} ${styles.button}`}>
        {children}
      </button>
    </div>
  );
}
