import PropTypes, { arrayOf } from 'prop-types';
import s from './friend-list.module.css';
import { FriendListItem } from './FriendListItem/index';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friend__list}>
      {friends.map(({ id, ...props }) => (
        <FriendListItem key={id} {...props} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: arrayOf(PropTypes.object).isRequired,
};
