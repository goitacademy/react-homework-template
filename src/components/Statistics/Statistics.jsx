import s from './Statistics.module.css';
// import StatisticsItems from './StatisticsItems';

const Statistics = props => {
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

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

  // const { stats } = props;
  // const element = stats.map(item => (
  //   <StatisticsItems key={item.id} label={item.label} />
  // ));

  // console.log(stats);
  // console.log(title);

  return (
    <>
      <section className={s.statistics}>
        {props.title && <h2 className={s.title}>{props.title}</h2>}
        <ul className={s.statList}>{element}</ul>
      </section>
    </>
  );
};

export default Statistics;
