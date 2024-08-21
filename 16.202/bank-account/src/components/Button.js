export function Button(props) {
  const { children, isActive = true, onClick } = props;
  return (
    <p>
      <button disabled={!isActive} onClick={onClick}>
        {children}
      </button>
    </p>
  );
}
