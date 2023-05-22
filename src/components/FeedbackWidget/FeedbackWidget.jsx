import { useState } from 'react';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import { Section } from '../Section';
import { Notification } from '../Notification';

export const Feedback = () => {
  const [good, setGood] = useState[0];
  const [neutral, setNeutral] = useState[0];
  const [bad, setBad] = useState[0];

  const feedBackName = { good, neutral, bad };

  const onLeaveFeedback = e => {
    const { name } = e.currentTarget;
    if (name === 'good') setGood(prevState => prevState + 1);
    if (name === 'neutral') setNeutral(prevState => prevState + 1);
    if (name === 'bad') setBad(prevState => prevState + 1);

  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;

    return Math.round((good / total) * 100);
  };

  return (
    <div>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification massage="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

