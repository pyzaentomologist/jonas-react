import { Button } from "./Button";
export function NextButton(props) {
  const { dispatch, answer, isLastQuestion } = props;
  if (answer === null) return null;
  
  if (!isLastQuestion) {
    return (
      <Button dispatch={() => dispatch({ type: "nextQuestion" })}>Next</Button>
    );
  } else {
    return (
      <Button dispatch={() => dispatch({ type: "finish" })}>Finish</Button>
    );
  }
}
