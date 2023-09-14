import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function SessionSetter(props) {
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const increment = () => {
    setSessionMinutes(sessionMinutes + 1);
    props.getSessionTime(sessionMinutes + 1);
  };
  const decrement = () => {
    setSessionMinutes(sessionMinutes - 1);
    props.getSessionTime(sessionMinutes - 1);
  };
  return (
    <div className="setter">
      <h2>Session Time</h2>
      <div className="timeSetter">
        <span onClick={decrement}>
          <FontAwesomeIcon icon={faArrowDown} className="arrow" />
        </span>
        <strong>{sessionMinutes}</strong>

        <span onClick={increment}>
          <FontAwesomeIcon icon={faArrowUp} className="arrow" />
        </span>
      </div>
    </div>
  );
}
