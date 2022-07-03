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

      <Button type="disabled" textButton="check" />
      <Button type="simple" textButton="check" />
      <Button type="success" textButton="check" />
      <Button type="error" textButton="check" />
      <Button type="warning" textButton="check" />
      <Button type="check" textButton="check" />
    </div>
  );
}
