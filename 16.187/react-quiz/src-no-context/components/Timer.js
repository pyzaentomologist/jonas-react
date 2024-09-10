import { useEffect, useState } from "react"

export function Timer(props) {
  const { seconds, dispatch } = props;
  const [time, setTime] = useState(seconds);

  const minutesLeft =
    (Math.floor(time / 60)) % 60 > 9 ? (Math.floor(time / 60)) % 60 : `0${(Math.floor(time / 60)) % 60}`;
  const secondsLeft = time % 60 > 9 ? time % 60 : `0${time % 60}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(curr => curr - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    time <= 0 && dispatch({ type: "tick" });
  }, [time, dispatch]);

  return (
    <div className="timer">
      {minutesLeft}:{secondsLeft}
    </div>
  );
}
