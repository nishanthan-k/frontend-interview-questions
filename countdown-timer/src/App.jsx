import { useCallback } from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";

function App() {
  const [timer, setTimer] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [action, setAction] = useState("Start");
  const actionRef = useRef(null);

  const actionHandler = useCallback(() => {
    action === "Start" ? setAction("Pause") : setAction("Start");
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

  useEffect(() => {
    const color = action === "Start" ? "#009E60" : "#FFDB58";

    actionRef.current.style.backgroundColor = color;
  }, [action]);

  return (
    <div className="bg-slate-100 shadow p-2 my-44 mx-auto w-4/5 md:w-2/3 h-56 space-y-6">
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
        <button className="w-1/4 md:w-32 py-1 text-lg  rounded-md mr-4" onClick={() => actionHandler()} ref={actionRef}>
          {action}
        </button>
        <button className="w-1/4 md:w-32 py-1 text-lg  bg-orange-500 rounded-md mr-4" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
