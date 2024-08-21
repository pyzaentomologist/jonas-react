import { Options } from "./Options";
export function Question(props) {
  const { question, dispatch, answer } = props;
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
