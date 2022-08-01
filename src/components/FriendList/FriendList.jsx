import PropTypes from 'prop-types';
import { LiItem, OnlineStatus } from "./FriendList.styled";

export const FrendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => {
            return (
                <LiItem key={id}>
                    <OnlineStatus isOnline={isOnline} />
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
                </LiItem>
            );
            })}
        </ul>
    );
}

FrendList.propTypes = {
 friends: PropTypes.arrayOf(
     PropTypes.shape({
         id: PropTypes.number.isRequired,
         name: PropTypes.string.isRequired,
         avatar: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
     })

  ),
}