import s from './FriendList.module.css';

const FriendListItem = props => {
  const element = props.props.map(item => (
    <li className={s.item} key={item.id}>
      {item.isOnline ? (
        <span className={s.statusOnline}></span>
      ) : (
        <span className={s.statusOffline}></span>
      )}
      <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
      <p className="name">{item.name}</p>
    </li>
  ));

  return <ul className={s.friendList}>{element}</ul>;
};

export default FriendListItem;
