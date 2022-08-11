import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const element = friends.map(item => (
    <FriendListItem
      key={item.id}
      name={item.name}
      avatar={item.avatar}
      isOnline={item.isOnline}
    />
  ));
  console.log(friends);
  return (
    <>
      <ul className={s.friendList}>{element}</ul>
    </>
  );
};

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
export default FriendList;
