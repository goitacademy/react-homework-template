import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = props => {
  console.log(props);
  const element = props.items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));

  return (
    <>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{element}</tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
