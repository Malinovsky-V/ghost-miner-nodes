import { useState } from "react";
import Button from "../Button/Button";
import styles from "./InputWithButton.module.css";

type InputWIthButtonProps = {
  type: string;
  placeholder: string;
  textButton:string;
  onClick?: () => void;
};

export default function InputWithButton({ type, placeholder, textButton, onClick}: InputWIthButtonProps) {
  const [inFocus, setFocus] = useState(false)
  return (
    <div className={`${styles.inputWrapper} ${inFocus && styles[`wrapperFocus-simple`]}`}>
    <input placeholder={placeholder} className={` ${styles.input}`} onBlur={()=> setFocus(false)} onFocus={()=> setFocus(true)} />
    <Button type={type} textButton={textButton} inInput={true} onClick={onClick} />
  </div>
  );
}
