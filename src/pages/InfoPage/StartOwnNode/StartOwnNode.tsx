import Button from "../../../components/Button/Button";
import styles from "./startOwnNode.module.css";

export default function StartOwnNode() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textBlockWrapper}>
        <h3 className={styles.title}>
          Let's go <span className={styles.spanOne}>for the {`\n`} </span>{" "}
          <span className={styles.spanTwo}>future</span> with us!{`\n`}{" "}
          <span className={styles.titleTwo}>
            Let's make <span className={styles.spanOne}>Web 3.0!</span>
          </span>
        </h3>
        <p className={styles.subTitle}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an{`\n`} unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button type="ownNode" textButton="Start you own Node" />
      </div>
      <div className={styles.imageBlock}></div>
    </div>
  );
}
