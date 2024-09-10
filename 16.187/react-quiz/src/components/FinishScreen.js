import { useQuiz } from "../hooks/useQuiz";
import { Button } from "./Button";

export function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
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
