import Button from "../Button/Button";
import styles from "./InputWithButton.module.css";

type InputWIthButtonProps = {
  type: string;
  placeholder: string;
  textButton:string;
};

export default function InputWithButton({ type, placeholder, textButton}: InputWIthButtonProps) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder={placeholder}
      ></input>
      <div className={styles.button}>
        <Button type={type} textButton={textButton} />
      </div>
    </div>
  );
}
