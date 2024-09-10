import { useQuiz } from "../hooks/useQuiz";
import { Options } from "./Options";

export function Question() {
  const { question } = useQuiz();
  return (
    <div>
      <h4>{question.question}</h4>
      <Options/>
    </div>
  );
}
