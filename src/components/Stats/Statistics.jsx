import PropTypes from 'prop-types';
import { StatsData } from '../StatisticItem/StatsData';
import { Section, Title, ListData, ItemData } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title.length > 0 ? <Title>{title}</Title> : null}

      <ListData>
        {stats.map(stat => (
          <ItemData key={stat.id}>
            <StatsData label={stat.label} percentage={stat.percentage} />
          </ItemData>
        ))}
      </ListData>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
