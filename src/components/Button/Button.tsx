import styles from "./button.module.css";

type ButtonProps = {
  textButton: string;
  type: string;
  onClick?: () => void;
  inInput?: boolean;
};

export default function Button({
  textButton,
  type,
  onClick,
  inInput,
}: ButtonProps) {
  return (
    <div
      className={`${styles[`wrapper-${type}`]} ${styles.wrapper} ${
        inInput && styles.inInput
      }`}
    >
      <button
        className={`${styles[`button-${type}`]} ${styles.button} `}
        onClick={onClick}
      >
        {textButton}
      </button>
    </div>
  );
}
