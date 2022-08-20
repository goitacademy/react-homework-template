import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({contacts, filter, deleteContact}) => {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li name={contact.name} id={contact.id} key={nanoid()}>
            {contact.name}: {contact.number}
            <button onClick={deleteContact} className={styles.deleteContactBtn}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
