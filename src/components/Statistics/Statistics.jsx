import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsItems from './StatisticsItems';

const Statistics = ({ stats, title }) => {
  const element = stats.map(item => (
    <StatisticsItems
      key={item.id}
      label={item.label}
      percentage={item.percentage}
    />
  ));

  return (
    <>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.statList}>{element}</ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
