import PropTypes, { arrayOf } from 'prop-types';
import css from "./TransactionHistory.module.css"


function TransactionHistory({items}) {
    return (
<table className={css.transaction__table}>
        <thead className={css.table__head}>
            <tr className={css.head__rows}>
                <th className={css.head__data}>Type</th>
                <th className={css.head__data}>Amount</th>
                <th className={css.head__data}>Currency</th>
            </tr>
        </thead>
    <tbody>
{items.map(({ id, type, amount, currency }) => {
    return (
        <tr key={id}
            className={css.table__rows}>
            <td className={css.table__data}>{type}</td>
            <td className={css.table__data}>{amount}</td>
            <td className={css.table__data}>{currency}</td>
        </tr>
            )})} 
    </tbody>      
</table>
    )
}

TransactionHistory.propTypes = {
    items: arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}

export default TransactionHistory;  