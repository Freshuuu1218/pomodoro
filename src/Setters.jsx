import { useState } from "react";
import BreakSetter from "./BreakSetter";
import SessionSetter from "./SessionSetter";
export default function Setters(props) {
  const [started, setStarted] = useState(false);
  const getBreakTime = (time) => {
    props.changeBreakTime(time);
  };
  const getSessionTime = (time) => {
    props.changeSessionTime(time);
  };

  const starting = () => {
    props.isStarted(true);
    setStarted(true);
  };
  const restart = () => {
    props.isStarted(false);

    setStarted(false);
  };
  return (
    <div className="timeSetters">
      <div className="timers">
        <SessionSetter getSessionTime={getSessionTime} />
        <BreakSetter getBreakTime={getBreakTime} />
      </div>
      {!started ? (
        <button onClick={starting}>Start</button>
      ) : (
        <button onClick={restart}>Restart</button>
      )}
    </div>
  );
}
