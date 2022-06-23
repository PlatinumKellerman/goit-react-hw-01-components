import PropTypes, { arrayOf } from 'prop-types';
import css from "./FriendList.module.css"
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />
            ))}
        </ul> 
    )
}

FriendList.propTypes = {
    friends: arrayOf(PropTypes.object).isRequired,
}

export default FriendList;