import { useQuiz } from "../hooks/useQuiz";
import { Button } from "./Button";
export function NextButton() {
  const { dispatch, answer, isLastQuestion } = useQuiz();
  if (answer === null) return null;
  
  if (!isLastQuestion) {
    return (
      <Button dispatch={() => dispatch({ type: "nextQuestion" })}>Next</Button>
    );
  } else {
    return <Button dispatch={() => dispatch({ type: "finish" })}>Finish</Button>;
  }
}
