import styles from './styles.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src="/src/assets/icons/Germany.svg" />
      <div className={styles.card__container}>
        <p className={styles.card__name}>Germany</p>
        <ul className={styles.card__list}>
          <li className={styles.card__list_position}>Population: 81,770,900</li>
          <li className={styles.card__list_position}>Region: Europe</li>
          <li className={styles.card__list_position}>Capital: Berlin</li>
        </ul>
      </div>

    </div>
  );
}

export default Card;
