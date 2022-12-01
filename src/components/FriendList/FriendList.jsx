import PropTypes from 'prop-types';
import { Card, CheckOnline, Avatar, Name, CardList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <CardList>
      {friends.map(friend => (
        <Card key={friend.id}>
          <CheckOnline isOnline={friend.isOnline}></CheckOnline>
          <Avatar src={friend.avatar} alt={friend.name} />
          <Name>{friend.name}</Name>
        </Card>
      ))}
    </CardList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
