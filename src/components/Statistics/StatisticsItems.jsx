import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function StatisticsItems({ label, percentage }) {
 
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  return (
    <li className={s.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={s.label}> {label}</span>
      <span className={s.percentage}> {percentage} %</span>
    </li>
  );
}

StatisticsItems.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItems;
