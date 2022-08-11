import s from './Statistics.module.css';
import PropTypes from 'prop-types';
// import StatisticsItems from './StatisticsItems';

const Statistics = props => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  console.log(props.stats);
  const element = props.stats.map(item => (
    <li
      className={s.item}
      key={item.id}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={s.label}> {item.label}</span>
      <span className={s.percentage}> {item.percentage}%</span>
    </li>
  ));

  // 1 вариант решения через props

  // const { stats } = props;
  // const element = stats.map(item => (
  //   <StatisticsItems key={item.id} label={item.label} />
  // ));

  // 2 вариант решения через деструктаризацию и доп функцию StatisticsItems

  return (
    <>
      <section className={s.statistics}>
        {props.title && <h2 className={s.title}>{props.title}</h2>}
        <ul className={s.statList}>{element}</ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    stats: PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  }),
};

export default Statistics;
