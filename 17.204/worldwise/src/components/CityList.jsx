import { CityItem } from './CityItem';
import styles from './CityList.module.css';
import { Message } from './Message';
import { Spinner } from './Spinner';

export function CityList(props) {
  const { cities, isLoading } = props;
  
  if (isLoading) return <Spinner />

  if (!cities.length) return <Message message="Add your first city ny clicking on a city on the map" />

  return (
    <ul className={styles.cityList}>
      {cities.map(city => <CityItem city={city} key={city.id} />
      )}
    </ul>
  )
}