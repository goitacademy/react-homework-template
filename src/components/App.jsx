import user from 'data/user.json';
import data from 'data/data.json';
import Profile from 'components/Profile/';
import Statistics from 'components/Statistics/';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data}  />
      {/* <Statistics stats={data}  /> */}
    </div>
  );
};
