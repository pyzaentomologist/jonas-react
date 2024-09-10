import styles from './CountryItem.module.css';
import { flagemojiToPNG } from "../utils/flagemojiToPNG";

export function CountryItem(props) {
  const { country } = props;
  return (
    <li className={styles.countryItem}>
      {flagemojiToPNG(country.emoji)}
      <span>{country.country}</span>
    </li>
  );
}
