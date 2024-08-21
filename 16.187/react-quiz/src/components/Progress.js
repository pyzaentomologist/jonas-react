export function Progress(props) {
  const { index, numQuestions, points, maxPossiblePoints, answer } = props;
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points}/{maxPossiblePoints}
      </p>
    </header>
  );
}
