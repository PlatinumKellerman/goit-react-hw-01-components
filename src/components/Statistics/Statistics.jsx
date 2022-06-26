import PropTypes, { arrayOf } from 'prop-types';
import s from './statistics.module.css';
import getRandomHexColor from 'js/getRandomHexColor'

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
