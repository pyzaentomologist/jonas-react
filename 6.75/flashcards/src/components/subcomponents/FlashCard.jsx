export function FlashCard(props) {
  const { selected, question, id, answer, onClick } = props;
  return (
    <div
      className={`${selected === id ? "selected" : ""}`}
      onClick={() => onClick(id)}
    >
      <p>{selected === id ? answer : question}</p>
    </div>
  );
}
