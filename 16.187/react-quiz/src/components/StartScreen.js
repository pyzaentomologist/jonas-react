import { Button } from "./Button";

export function StartScreen(props) {
  const { numQuestions, dispatch } = props;
  return (
    <div className="start">
      <h2>Welcome to react quiz!</h2>
      <h3>{numQuestions} questions to test you React mastery</h3>
      <Button dispatch={() => dispatch({ type: "start" })}>
        Let's start
      </Button>
    </div>
  );
}
