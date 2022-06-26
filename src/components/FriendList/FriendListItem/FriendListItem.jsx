import PropTypes from 'prop-types';
import s from './friend-list-item.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={s[isOnline ? 'status__online' : 'status__offline']}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
