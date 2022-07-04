import styles from "./InputWithButton.module.css";
import Button from "../Button/Button";
import { useState } from "react";

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
  const [inFocus, setFocus] = useState(false)
  return (
    <div className={styles.forExample}>
      <div className={styles.inputWrapper}>
        <input className={` ${styles.input}`}></input>
      </div>
      <div className={`${styles.inputWrapper} ${inFocus && styles[`wrapperFocus-simple`]}`}>
        <input className={` ${styles.input}`} onBlur={()=> setFocus(false)} onFocus={()=> setFocus(true)} />
        <Button type="check" textButton="check" inInput={true} />
      </div>

      {inFocus && <Button type="simple" textButton="check" />}
      <Button type="success" textButton="check" />
      <Button type="error" textButton="check" />
      <Button type="warning" textButton="check" />
      <Button type="check" textButton="check" />
    </div>
  );
}
