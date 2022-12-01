import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Section = styled.section`
  border: solid 1px #000;
  width: 400px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  text-transform: uppercase;
`;

export const ListData = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: calc(100% / 5);

  list-style: none;
`;

export const ItemData = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};

  width: 100%;
  padding: ${props => props.theme.spacing(2)};
  background: ${getRandomHexColor};
`;
