import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, name, handleInput, number }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.formInput}>
        Name
        <input
          value={name}
          className={styles.formTextfield}
          type="text"
          name="name"
          onChange={handleInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.formInput}>
        Number
        <input
          value={number}
          className={styles.formTextfield}
          onChange={handleInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.formBtn}>
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  handleInput: PropTypes.func,
  number: PropTypes.string,
};

export default Form;
