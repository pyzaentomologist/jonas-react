import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was usedoutside QuizProvider");
  return context;
}
