import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';


export const FrendList = ({ friends }) => {
    console.log(friends)
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    />
                ))}
            
            {/* <FriendListItem
                avatar={friends[0].avatar}
                name={friends[0].name}
                isOnline={friends[0].isOnline}
            /> */}

        </ul>
    );
}

FrendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        
    })),
}