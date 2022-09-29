import styled from '@emotion/styled';

export const StatisticItem = styled.li`
  padding: ${p => p.theme.space[2]}px;
  background-color: rgb(102, 0, 153, 0.2);

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
    background-color: rgb(0, 128, 0, 0.5);
  }
`;
