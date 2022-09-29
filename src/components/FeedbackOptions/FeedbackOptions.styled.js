import styled from '@emotion/styled';

export const FeedbackBtnList = styled.ul`
  display: flex;
  justify-content: space-around;

  & button {
    width: 60px;
    padding: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.normal + p.theme.colors.black};
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    &:hover {
      background-color: ${p => p.theme.colors.accent};
      color: ${p => p.theme.colors.white};
      border-color: ${p => p.theme.colors.accent};
    }
  }
`;
