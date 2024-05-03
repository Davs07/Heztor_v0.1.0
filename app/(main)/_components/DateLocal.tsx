import { useEffect, useState } from "react";

function DateLocal( {...props}) {
  const [time, setTime] = useState("");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const formattedDateTime = new Date().toLocaleString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      setTime(currentTime);
      setDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col items-end w-28" {...props}>
      <div className="text-slate-900 w-[76px] max-h-6 text-start">
        <h5 className="text-lg">{time}</h5>
      </div>
      <div className="text-slate-400 max-h-5 ">
        <p className="text-xs">{dateTime}</p>
      </div>
    </div>
  );
}

export default DateLocal;
