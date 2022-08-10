import user from 'data/user.json';
import Profile from 'components/Profile/';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
