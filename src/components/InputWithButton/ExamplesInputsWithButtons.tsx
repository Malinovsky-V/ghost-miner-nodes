import styles from "./forExample.module.css";
import Button from "../Button/Button";
import InputWithButton from "./InputWithButton";

export default function ExamplesInputsWithButtons() {
  return (
    <div>
      <div className={styles.forExampleButton}>
        <Button type="simple" textButton="check" />
        <Button type="disabled" textButton="check" />
        <Button type="success" textButton="check" />
        <Button type="error" textButton="check" />
        <Button type="warning" textButton="check" />
        <Button type="check" textButton="check" />
      </div>
      <div className={styles.forExampleButton}>
        <InputWithButton type="simple" textButton="check" placeholder="ForExample" />
        <InputWithButton type="disabled" textButton="check" placeholder="ForExample"/>
        <InputWithButton type="success" textButton="check" placeholder="ForExample"/>
        <InputWithButton type="error" textButton="check" placeholder="ForExample"/>
        <InputWithButton type="warning" textButton="check" placeholder="ForExample"/>
        <InputWithButton type="check" textButton="check"placeholder="ForExample" />
      </div>
    </div>
  );
}
