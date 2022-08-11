import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  const element = friends.map(item => (
    <FriendListItem
      key={item.id}
      name={item.name}
      avatar={item.avatar}
      isOnline={item.isOnline}
    />
  ));

  return (
    <>
      <ul className={s.friendList}>{element}</ul>
    </>
  );
};

export default FriendList;
