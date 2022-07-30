import PropTypes from 'prop-types';
import { Tr } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {

    return (   
        <Tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </Tr>

    );
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}