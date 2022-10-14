import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';
import { Wrapper, InfoBlock } from './RecipeInfo.styled';

export const RecipeInfo = ({ time, servings, calories }) => {
  return (
    <Wrapper>
      <InfoBlock>
        <BsAlarm />
        {time} mins
      </InfoBlock>
      <InfoBlock>
        <HiOutlineChartPie />
        {servings} servings
      </InfoBlock>
      <InfoBlock>
        <HiOutlineChartBar />
        {calories} calories
      </InfoBlock>
    </Wrapper>
  );
};
