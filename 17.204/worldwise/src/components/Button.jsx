import styles from './Button.module.css'

export function Button(props) {
  const { children, onClick, type } = props;
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
