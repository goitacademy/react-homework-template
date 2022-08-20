import styles from '../Form/Form.module.css';
import PropTypes from 'prop-types';

const Filter = ({ handleInput, filter }) => {
  return (
    <label className={styles.formInput}>
      Find contacts by name
      <input
        onChange={handleInput}
        name="filter"
        className={styles.formTextfield}
        type="text"
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  handleInput: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
