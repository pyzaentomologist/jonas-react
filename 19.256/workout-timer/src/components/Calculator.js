import { useState, memo, useEffect } from 'react';
import clickSound from '../ClickSound.m4a';

function InputRange(props) {
  const { title, min, max, steps, value, children, onChange } = props;
  return (
    <div>
      <label>{title}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={steps}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>{children}</span>
    </div>
  );
}

function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
  }, [number, sets, speed, durationBreak]);
  
  useEffect(() => {
    const playSound = () => {
      if (!allowSound) return;
      const sound = new Audio(clickSound);
      sound.play();
    };
    playSound();
  }, [duration, allowSound]);

  useEffect(() => {
    document.title = `Your ${number}-excercise workout`;
  }, [number]);

  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  function handleInc() {
    setDuration((duration) => Math.floor(duration + 1));
  }
  function handleDec() {
    setDuration((duration) => duration > 1 ? Math.ceil(duration - 1) : 0);
  }

  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={(e) => setNumber(+e.target.value)}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <InputRange
          title="How many sets?"
          min="1"
          max="5"
          value={sets}
          onChange={setSets}
        >
          {sets}
        </InputRange>
        <InputRange
          title="How fast are you?"
          min="30"
          max="180"
          steps="30"
          value={speed}
          onChange={setSpeed}
        >
          {speed} sec/exercise
        </InputRange>
        <InputRange
          title="Break length"
          min="1"
          max="10"
          value={durationBreak}
          onChange={setDurationBreak}
        >
          {durationBreak} minutes/break
        </InputRange>
      </form>
      <section>
        <button onClick={() => handleDec()}>–</button>
        <p>
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </p>
        <button onClick={() => handleInc()}>+</button>
      </section>
    </>
  );
}

export default memo(Calculator);
