import PropTypes from 'prop-types';
const FriendList = ({ friends }
) => {
    return (
       <ul class="friend-list">
            {friends.map(friend => (
              <li class="item" key={friend.id}>
            <span class="status">{friend.isOnline}</span>
  <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p class="name">{friend.name }</p>
</li>
  ))}
</ul>
    );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
export default FriendList;