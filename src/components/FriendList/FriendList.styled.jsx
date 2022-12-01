import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`;

export const Card = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;

  border: 1px solid #000;
  border-radius: 10px;

  width: 300px;
  padding: 8px;

  box-shadow: 10px 10px 22px -12px rgba(0, 0, 0, 0.75);
`;

export const CheckOnline = styled.span`
  background: ${props => {
    switch (props.isOnline) {
      case false:
        return 'red';
      default:
        return 'green';
    }
  }};

  width: 30px;
  height: 30px;

  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 100px;

  border-radius: 5px;

  background: ${getRandomHexColor};
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
