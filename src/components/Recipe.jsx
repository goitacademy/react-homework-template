import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div>
          <BsAlarm />
          <p>{time} mins</p>
        </div>
        <div>
          <HiOutlineChartPie />
          <p>{servings} servings</p>
        </div>
        <div>
          <HiOutlineChartBar />
          <p>{calories} calories</p>
        </div>
      </div>
    </div>
  );
};
