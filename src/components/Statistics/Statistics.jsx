import s from './Statistics.module.css';

const Statistics = props => {
  const element = props.stats.map(item => (
    <li key={item.id} className={s.item}>
      <span className={s.label}> {item.label}</span>
      <span className={s.percentage}> {item.percentage}</span>
    </li>
  ));

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
