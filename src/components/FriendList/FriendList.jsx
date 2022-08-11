import friends from 'data/friends.json';
import FriendListItem from './FriendListItem';

const FriendList = () => {
  return (
    <>
      <FriendListItem props={friends} />
    </>
  );
};

export default FriendList;
