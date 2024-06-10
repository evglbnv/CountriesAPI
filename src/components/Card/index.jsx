import styles from './styles.module.css';

function Card() {
  return (
    <li className={styles.card}>
      <img className={styles.card__image} src="/src/assets/icons/Germany.svg" />
      <div className={styles.card__container}>
        <p className={styles.card__name}>Germany</p>
        <ul>
          <li>Population: 81,770,900</li>
          <li>Region: Europe</li>
          <li>Capital: Berlin</li>
        </ul>
      </div>

    </li>
  );
}

export default Card;
