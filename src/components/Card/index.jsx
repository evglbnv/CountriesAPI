/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import styles from './styles.module.css';

function Card({
  name, capital, population, region, flag, onClick,
}) {
  return (
    <li className={styles.card} onClick={onClick}>
      <img className={styles.card__image} src={flag} />
      <div className={styles.card__container}>
        <p className={styles.card__name}>{name}</p>
        <ul className={styles.card__list}>
          <li className={styles.card__list_position}><b>Population :</b> {population.toLocaleString()}</li>
          <li className={styles.card__list_position}><b>Region:</b> {region}</li>
          <li className={styles.card__list_position}><b>Capital:</b> {capital}</li>
        </ul>
      </div>
    </li>
  );
}

export default Card;
