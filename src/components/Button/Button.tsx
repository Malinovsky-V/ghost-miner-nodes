import styles from "./button.module.css";

type ButtonProps = {
  textButton: string;
  type: string;
};

export default function Button({ textButton, type }: ButtonProps) {
  return (
    <div className={`${styles[`wrapper-${type}`]} ${styles.buttonWrapper}`}>
      <button className={`${styles[`button-${type}`]} ${styles.button}`}>
        {textButton}
      </button>
    </div>
  );
}
