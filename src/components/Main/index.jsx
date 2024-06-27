/* eslint-disable react/prop-types */
import styles from './styles.module.css';

const Main = ({ children }) => (
    <section className={styles.main}>
        <div className={styles.main__container}>
            {children}
        </div>
    </section>
);

export default Main;
