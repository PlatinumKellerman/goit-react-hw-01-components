import PropTypes, { arrayOf } from 'prop-types';
import s from './transaction-history.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transaction__table}>
      <thead className={s.table__head}>
        <tr className={s.head__rows}>
          <th className={s.head__data}>Type</th>
          <th className={s.head__data}>Amount</th>
          <th className={s.head__data}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={s.table__rows}>
              <td className={s.table__data}>{type}</td>
              <td className={s.table__data}>{amount}</td>
              <td className={s.table__data}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
