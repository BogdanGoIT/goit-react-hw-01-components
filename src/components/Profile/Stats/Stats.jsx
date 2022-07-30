import PropTypes from 'prop-types';
import css from './Stats.module.css';

export const Stats = ({ stats }) => {
    return (
        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    );
}

// Stats.propTypes = {
//     stats: PropTypes.objectOf(PropTypes.number),
// }


Stats.propTypes = {
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
}