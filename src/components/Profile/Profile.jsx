import PropTypes from 'prop-types';
import {
  Card,
  UserInfo,
  UserPhoto,
  Name,
  Tag,
  Location,
  ActivityList,
  Activity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Card key={username}>
      <UserInfo>
        <UserPhoto alt="User avatra" src={avatar} />
        <Name>{username}</Name>
        <Tag>&#64;{tag}</Tag>
        <Location>{location}</Location>
      </UserInfo>

      <ActivityList>
        <Activity>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </Activity>

        <Activity>
          <span>Views</span>
          <span>{stats.views}</span>
        </Activity>

        <Activity>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </Activity>
      </ActivityList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
