import React from "react";

export function Output(props) {
  const { theBill, yourTip, friendTip } = props;

  const tips =
    theBill > 0
      ? Number((((yourTip + friendTip) * 100) / (theBill * 2)).toFixed(2))
      : 0;

  const sum = theBill + tips;
    
  return (
    <div>
      <h1>{`Razem: ${sum.toFixed(2)}zł (${theBill.toFixed(2)}zł + ${tips.toFixed(2)}zł napiwek)`}</h1>
    </div>
  );
}
