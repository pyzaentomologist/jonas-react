import React, { useState } from "react";
import { Button } from "./subcomponents/Button";

export function Box(props) {
  const { children } = props;
  const [curOpen, onCurOpen] = useState(true);
    
  return (
    <div className="box">
      <Button curOpen={curOpen} onOpen={onCurOpen} />
      {curOpen && (
        <>
          {children}
        </>
      )}
    </div>
)
}
