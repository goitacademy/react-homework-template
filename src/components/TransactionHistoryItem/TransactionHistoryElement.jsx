import PropTypes from 'prop-types';
import { ElementTable, Element } from './TransactionHistoryElement.styled';

export const TransactionHistoryElement = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(transaction => (
        <ElementTable key={transaction.id}>
          <Element>{transaction.type}</Element>
          <Element>{transaction.amount}</Element>
          <Element>{transaction.currency}</Element>
        </ElementTable>
      ))}
    </tbody>
  );
};

TransactionHistoryElement.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      carrency: PropTypes.string,
    })
  ),
};
