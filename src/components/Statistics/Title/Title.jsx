import { StaticTitle } from "./StaticTitle.styled";
import PropTypes from 'prop-types';

export const Title = ({ title }) => {
    return (
        title &&
            <StaticTitle>{title}</StaticTitle>
    );
}

Title.propTypes = {
    title: PropTypes.string,
}