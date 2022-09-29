import styled from '@emotion/styled';

export const StyledSection = styled.section`
  position: relative;
  padding: ${p => p.theme.space[4]}px;
  &:not(:last-child) {
    ::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      transform: translateY(50%);
      background-color: ${p => p.theme.colors.accent};
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;
