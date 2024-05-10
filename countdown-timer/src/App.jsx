import { useCallback } from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";

function App() {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 62,
  });
  const [action, setAction] = useState("Start");
  const actionRef = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    const color = action === "Start" ? "#009E60" : "#FFDB58"; // green and yellow
    actionRef.current.style.backgroundColor = color;
  }, [action]);

  const timerFunc = () => {
    console.log("Hello from timerFunc");
    let { hours, minutes, seconds } = timer;

    if (seconds > 0) {
      seconds--;

      if (seconds === 0) {
        minutes--;
      }
    }

    console.log(hours, minutes, seconds);
    setTimer({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  };

  const timerHandler = () => {
    console.log(action);
    if (action === "Start") {
      let { hours, minutes, seconds } = timer;
      console.log(hours, minutes, seconds);

      if (seconds > 59) {
        hours = Math.floor(seconds / 3600);
        minutes = Math.floor((seconds % 3600) / 60);
        seconds = seconds % 60;
      }

      if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        minutes = Math.floor(minutes % 60);
      }

      setTimer({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });

      interval.current = setInterval(() => timerFunc(), 1000);
    } else {
      clearInterval(interval.current);
    }
  };

  const actionHandler = useCallback(() => {
    action === "Start" ? setAction("Stop") : setAction("Start");
  }, [action]);

  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setTimer((prevTimer) => ({
      ...prevTimer,
      [name]: value,
    }));
  }, []);

  const resetTimer = () => {
    setTimer({
      hours: "00",
      minutes: "00",
      seconds: "00",
    });
  };

  return (
    <div className="w-screen h-dvh bg-slate-900">
      <div className="bg-slate-700 shadow p-2 my-0 mx-auto w-4/5 md:w-2/3 h-56 space-y-6">
        <h1 className="text-center text-3xl">Countdown</h1>

        <div className="flex gap-2">
          <div className="bg-slate-400 w-1/3">
            <p className="text-2xl text-center">Hours</p>
            <input className="h-10 text-2xl outline-none w-full border-none text-center" type="text" value={timer.hours} name="hours" onChange={handleInput} />
          </div>
          <div className="bg-slate-400 w-1/3">
            <p className="text-2xl text-center">Minutes</p>
            <input className="h-10 text-2xl outline-none w-full border-none text-center" type="text" value={timer.minutes} name="minutes" onChange={handleInput} />
          </div>
          <div className="bg-slate-400 w-1/3">
            <p className="text-2xl text-center">Seconds</p>
            <input className="h-10 text-2xl outline-none w-full border-none text-center" type="text" value={timer.seconds} name="seconds" onChange={handleInput} />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="w-1/4 md:w-32 py-1 text-lg  rounded-md mr-4"
            onClick={() => {
              actionHandler();
              timerHandler();
            }}
            ref={actionRef}
          >
            {action}
          </button>
          <button className="w-1/4 md:w-32 py-1 text-lg  bg-orange-500 rounded-md mr-4" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
