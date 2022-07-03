import styles from "./InputWithButton.module.css";
import Button from "../Button/Button";

type InputWIthButtonProps = {
  type: string;
  placeholder: string;
  textButton: string;
};

export default function ExamplesInputsWithButtons({
  type,
  placeholder,
  textButton,
}: InputWIthButtonProps) {
  return (
    <div>
      <div className={styles.inputWrapper}>
        <input className={` ${styles.input}`}></input>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>Check</div>
      </div>
    </div>
  );
}
