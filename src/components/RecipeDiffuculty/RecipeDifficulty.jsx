import { Wrapper, Title, BadgeList, Badge } from './RecipeDifficulty.styled';

export const RecipeDifficulty = ({ difficulty }) => {
  return (
    <Wrapper>
      <Title>Difficulty</Title>
      <BadgeList>
        <Badge active={difficulty === 'easy'}>Easy </Badge>
        <Badge active={difficulty === 'medium'}>Medium</Badge>
        <Badge active={difficulty === 'hard'}>Hard</Badge>
      </BadgeList>
    </Wrapper>
  );
};
