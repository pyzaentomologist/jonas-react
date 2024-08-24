import styles from './CountryItem.module.css'
export function CountryItem(props) {
    const { country } = props;
    return (
      <li className={styles.countryItem}>
        <span>{country.emoji}</span>
        <span>{country.country}</span>
      </li>
    );
}
