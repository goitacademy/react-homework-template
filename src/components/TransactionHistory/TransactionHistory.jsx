import { TransactionHistoryElement } from '../TransactionHistoryItem/TransactionHistoryElement';
import { Table, NameData } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <NameData>Type</NameData>
          <NameData>Amount</NameData>
          <NameData>Currency</NameData>
        </tr>
      </thead>

      <TransactionHistoryElement transactions={transactions} />
    </Table>
  );
};
