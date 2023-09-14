import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function BreakSetter(props) {
  const [breakMinutes, setBreakMinutes] = useState(5);
  const increment = () => {
    setBreakMinutes(breakMinutes + 1);
    props.getBreakTime(breakMinutes + 1);
  };
  const decrement = () => {
    setBreakMinutes(breakMinutes - 1);
    props.getBreakTime(breakMinutes - 1);
  };
  return (
    <div className="setter">
      <h2>Break Time</h2>

      <div className="timeSetter">
        <span onClick={decrement}>
          <FontAwesomeIcon icon={faArrowDown} className="arrow" />
        </span>
        <strong>{breakMinutes}</strong>

        <span onClick={increment}>
          <FontAwesomeIcon icon={faArrowUp} className="arrow" />
        </span>
      </div>
    </div>
  );
}
