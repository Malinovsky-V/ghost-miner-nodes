import AboutUs from "./AboutUs/AboutUs";
import CheckNode from "./CheckNode/CheckNode";
import styles from "./InfoPage.module.css";
import NodeStatistic from "./NodeStatistic/NodeStatistic";
import RewardCalculator from "./RewardCalculator/RewardCalculator";
import StartOwnNode from "./StartOwnNode/StartOwnNode";

export default function InfoPage() {
  return (
    <div className={styles.content}>
      <StartOwnNode />
      <NodeStatistic />
      <CheckNode />
      <RewardCalculator />
      <AboutUs />
    </div>
  );
}
