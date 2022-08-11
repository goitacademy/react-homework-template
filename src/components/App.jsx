import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import Profile from 'components/Profile/';
import Statistics from 'components/Statistics/';
import FriendList from 'components/FriendList/';
import TransactionHistory from 'components/TransactionHistory/';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data}  /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
