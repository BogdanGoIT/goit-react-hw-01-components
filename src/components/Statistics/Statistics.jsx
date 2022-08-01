import PropTypes from 'prop-types';
import { StaticTitle, StaticList, StaticItem, Label } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && <StaticTitle>{title}</StaticTitle>}
            
            <StaticList>
                {stats.map(({ id, label, percentage }) =>
                    <StaticItem key={id}>
                        <Label>{label}</Label>
                        <span className="percentage">{percentage}</span>
                    </StaticItem>)
                }
            </StaticList>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,

    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired, 
        })
    )

}