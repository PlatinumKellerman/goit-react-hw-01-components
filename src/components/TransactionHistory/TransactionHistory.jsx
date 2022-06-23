import PropTypes, { arrayOf } from 'prop-types';
import css from "./TransactionHistory.module.css"


function TransactionHistory({items}) {
    return (
<table class="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
    <tbody>
{items.map(({ id, type, amount, currency }) => {
    return (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
            )})} 
    </tbody>      
</table>
    )
}

TransactionHistory.propTypes = {
    items: arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default TransactionHistory;