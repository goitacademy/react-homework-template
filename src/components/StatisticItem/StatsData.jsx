import PropTypes from 'prop-types';
import { Label, Percentage } from './StatsData.styled';

export const StatsData = ({ label, percentage }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
};

StatsData.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
