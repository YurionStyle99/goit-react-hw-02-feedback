import React, { Component } from "react";
import styles from "./styles.module.css";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notofocation";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

handleFeedback = event => {
    const { name } = event.target;
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? (good / total) * 100 : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positivePercent = this.countPositivePercentage();

    
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
        <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
         {totalFeedback<=0&&
         <Notification message="There is no feedback" />
         }
        </Section>
        {totalFeedback>0&& 
     <Section title="Statistics">
     <Statistics
       good={good}
       neutral={neutral}
       bad={bad}
       total={totalFeedback}
       positivePercent={positivePercent}
     />
   </Section>
      }
        
      </div>
    );
  }
}
