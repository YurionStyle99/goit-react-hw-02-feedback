import styles from "../styles.module.css";

import PropTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positivePercent }) => {

  return (
<div className={styles.stats}>
          <p className={styles.stats__label}>
            Good:
            </p>
          <p className={`${styles.stats__value} ${styles["stats__value--positive"]}`}>
            {good}
            </p>
          <p className={styles.stats__label}>
            Neutral:</p>
          <p className={styles.stats__value}>
            {neutral}</p>
          <p className={styles.stats__label}>
            Bad:</p>
          <p className={`${styles.stats__value} ${styles["stats__value--negative"]}`}>
            {bad}</p>
          <p className={styles.stats__label}>
            Total Feedback:</p>
          <p className={styles.stats__value}>
            {total}</p>
          <p className={styles.stats__label}>
            Positive Feedback:</p>
          <p className={`${styles.stats__value}  ${styles["stats__value--positive"]}`}>
            {positivePercent.toFixed(0)}%
          </p>
        </div>)}
        export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};