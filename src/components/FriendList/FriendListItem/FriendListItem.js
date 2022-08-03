import PropTypes from 'prop-types';
import { LiItem, OnlineStatus } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <LiItem>
            <OnlineStatus isOnline={isOnline} />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </LiItem>
    );
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


                // <LiItem key={id}>
                //     <OnlineStatus isOnline={isOnline} />
                //     <img className="avatar" src={avatar} alt="User avatar" width="48" />
                //     <p className="name">{name}</p>
                // </LiItem>