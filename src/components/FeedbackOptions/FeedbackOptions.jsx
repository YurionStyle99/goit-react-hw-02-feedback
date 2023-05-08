import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.btnGroup}>
      {options.map((option) => (
        <button
          name={option}
          key={option}
          className={`${styles.btn} ${styles[`btn-${option}`]}`}
          type="button"
          onClick={onLeaveFeedback}
        >
           {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
