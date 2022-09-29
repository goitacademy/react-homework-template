import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

import { Container } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onleaveFeedback = FeedbackValue => {
    switch (FeedbackValue) {
      case 'good':
        return setGood(prev => prev + 1);
      case 'neutral':
        return setNeutral(prev => prev + 1);
      case 'bad':
        return setBad(prev => prev + 1);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (!totalFeedback) {
      return 0;
    }
    const result = (good / totalFeedback) * 100;
    return Number(result.toFixed(2));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const feedbacksKeys = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          feedbacksKeys={feedbacksKeys}
          leaveFeedback={onleaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            feedbacksKeys={feedbacksKeys}
            feedbacksValue={{ good: good, neutral: neutral, bad: bad }}
            positivePercentage={positivePercentage}
            totalFeedback={totalFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
