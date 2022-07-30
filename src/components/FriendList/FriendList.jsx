import { FriendListItem } from "./FriendListItem";
import friends from 'patch/friends.json';

export const FrendList = () => {
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends} />
        </ul>
    );
}
