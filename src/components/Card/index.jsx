/* eslint-disable react/prop-types */
import styles from './styles.module.css';

function Card({
  name, capital, population, region, flag,
}) {
  return (
    <li className={styles.card}>
      <img className={styles.card__image} src={flag} />
      <div className={styles.card__container}>
        <p className={styles.card__name}>{name}</p>
        <ul className={styles.card__list}>
          <li className={styles.card__list_position}>Population : {population}</li>
          <li className={styles.card__list_position}>Region: {region}</li>
          <li className={styles.card__list_position}>Capital: {capital}</li>
        </ul>
      </div>
    </li>
  );
}

export default Card;
