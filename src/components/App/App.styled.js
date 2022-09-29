import styled from '@emotion/styled';
export const Container = styled.div`
  background-color: ${p => p.theme.colors.muted};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  margin: 0 auto;
  width: 280px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SecondTitle = styled.h2`
  text-align: center;
  padding: ${p => p.theme.space[4]}px 0 ${p => p.theme.space[4]}px 0;
`;
