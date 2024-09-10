export function Button(props) {
  const { children, dispatch} = props;
  return (
    <button className="btn btn-ui" onClick={dispatch}>
      {children}
    </button>
  );
}