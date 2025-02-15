"use client"

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

export function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="flex gap-3 bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? (
        <>
          {pendingLabel}
          <SpinnerMini />
        </>
      ) : (
        children
      )}
    </button>
  );
}
