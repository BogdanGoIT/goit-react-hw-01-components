
import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';
import user from 'patch/user.json';
import css from './Profile.module.css';

export const Profile = () => {
   
    return (
    <div className={css.profile}>
            <Description
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
            />
            <Stats stats={user.stats}/>
    </div>
    );
};


