import PropTypes from 'prop-types';
import { LiItem, OnlineStatus } from "./FriendListItem.styled";

export const FriendListItem = ({ friends }) => {
    return (
        friends.map(({ id, avatar, name, isOnline }) => {
            return (
                <LiItem key={id}>
                    <OnlineStatus isOnline={isOnline} />
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
                </LiItem>
            );
        })

    );
}

FriendListItem.propTypes = {
 friends: PropTypes.arrayOf(
     PropTypes.shape({
         name: PropTypes.string.isRequired,
         avatar: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
     })

  ),
}


// EventBoard.propTypes = {
//     events: PropTypes.arrayOf(
//         PropTypes.exact({
//             name: PropTypes.string.isRequired,
//             location: PropTypes.string.isRequired,
//             speaker: PropTypes.string.isRequired,
//             type: PropTypes.string.isRequired,
//             time: PropTypes.exact( {
//                 start: PropTypes.string.isRequired,
//                 end: PropTypes.string.isRequired,
//             }),
//         }),
//     ),
// };
