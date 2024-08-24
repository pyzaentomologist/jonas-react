import styles from './Message.module.css';

export function Message(props) {
    const {message} = props;
    return (
      <p className={styles.message}>
        <span role="img">👋</span> {message}
      </p>
    );
}
