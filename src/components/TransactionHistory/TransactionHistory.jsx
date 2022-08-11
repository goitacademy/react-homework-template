import s from './TransactionHistory.module.css';

const TransactionHistory = props => {
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

export default TransactionHistory;
