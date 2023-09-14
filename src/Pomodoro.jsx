import { useEffect, useState } from "react";
import Setters from "./Setters";
export default function Pomodoro() {
  // session and break minutes
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [sessionMinutes, setSessionMinutes] = useState(25);
  //   minutes and seconds to display
  const [minutes, setMinutes] = useState(sessionMinutes);
  const [seconds, setSeconds] = useState(0);
  //   when break displayMessage = true
  const [displayMessage, setDisplayMessage] = useState(false);
  //   when button clicked interval started
  const [started, setStarted] = useState(false);

  function changeBreakTime(time) {
    setBreakMinutes(time);
  }
  function changeSessionTime(time) {
    setSessionMinutes(time);
  }
  function isStarted(tf) {
    setStarted(tf);
  }
  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let newMinutes = displayMessage ? sessionMinutes : breakMinutes;
            let seconds = 0;
            setSeconds(seconds);
            setMinutes(newMinutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      setMinutes(sessionMinutes);
      setSeconds(0);
      if (displayMessage) {
        setDisplayMessage(false);
      }
    }
  }, [seconds, minutes, displayMessage, breakMinutes, sessionMinutes, started]);

  const fixedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const fixedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div id="pomodoro">
      <h1>POMODORO</h1>
      <div className="popup">{displayMessage && <p>Break Time!</p>}</div>
      <div className="timer">
        {fixedMinutes}:{fixedSeconds}
      </div>
      <Setters
        changeBreakTime={changeBreakTime}
        changeSessionTime={changeSessionTime}
        isStarted={isStarted}
      />
    </div>
  );
}
