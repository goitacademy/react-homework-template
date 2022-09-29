import React from 'react';
import { nanoid } from 'nanoid';
import { StatisticItem } from './Statistics.styled';

const Statistics = ({
  feedbacksKeys,
  feedbacksValue,
  totalFeedback,
  positivePercentage,
}) => (
  <ul>
    {feedbacksKeys.map(feedbackKey => (
      <StatisticItem key={nanoid()}>
        {feedbackKey}: {feedbacksValue[feedbackKey]}
      </StatisticItem>
    ))}
    <StatisticItem>
      <p>total: {totalFeedback} </p>
    </StatisticItem>
    <StatisticItem>
      <p>positive feedback: {positivePercentage}% </p>
    </StatisticItem>
  </ul>
);

export default Statistics;
