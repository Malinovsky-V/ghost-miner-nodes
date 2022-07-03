import styles from "./button.module.css";

type ButtonProps = {
  textButton: string;
  type: string;
  onClick?: () => void;
};

export default function Button({ textButton, type, onClick }: ButtonProps) {
  return (
    <div className={`${styles[`wrapper-${type}`]} ${styles.wrapper}`}>
      <button className={`${styles[`button-${type}`]} ${styles.button}`} onClick={onClick}>
        {textButton}
      </button>
    </div>
  );
}
