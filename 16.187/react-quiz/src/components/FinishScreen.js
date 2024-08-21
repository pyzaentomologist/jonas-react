import { Button } from "./Button";
export function FinishScreen(props) {
  const { points, maxPossiblePoints, highscore, dispatch } = props;
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🥇";
  } else if (percentage > 80) {
    emoji = "🎉";
  } else if (percentage > 50) {
    emoji = "🙃";
  } else if (percentage > 0) {
    emoji = "😥";
  } else {
    emoji = "🤦‍♂️";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore {highscore} points</p>
      <Button dispatch={() => dispatch({ type: "restart" })}>Restart</Button>
    </>
  );
}
