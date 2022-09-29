import React from 'react';
import { nanoid } from 'nanoid';

import { FeedbackBtnList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ feedbacksKeys, leaveFeedback }) => (
  <FeedbackBtnList>
    {feedbacksKeys.map(key => (
      <li key={nanoid()}>
        <button onClick={() => leaveFeedback(key)}>{key}</button>
      </li>
    ))}
  </FeedbackBtnList>
);

export default FeedbackOptions;
