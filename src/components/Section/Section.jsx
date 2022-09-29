import { StyledSection, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <StyledSection>
    <Title>{title}</Title>
    {children}
  </StyledSection>
);

export default Section;
