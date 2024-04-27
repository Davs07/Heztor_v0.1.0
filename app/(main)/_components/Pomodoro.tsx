import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Tiempo inicial en segundos
  const [isActive, setIsActive] = useState(false);

  let intervalId: NodeJS.Timeout;
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Aquí puedes añadir cualquier lógica para cuando el temporizador llegue a cero
      clearInterval(intervalId);
      alert("¡Tiempo cumplido!");
      setIsActive(false);
    }

    return () => clearInterval(intervalId);
  }, [isActive, timeLeft]);

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setTimeLeft(25 * 60);
    setIsActive(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Card className="w-full max-w-sm h-[300px]">
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tighter text-main-2" >Pomodoro</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isActive ? "Focusing" : "Paused"} for 25 minutes
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          {/* <div className="flex items-center space-x-4">
            <div className="text-4xl font-semibold leading-none">
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <div
              className="h-2 bg-green-500"
              style={{ width: `${(1 - timeLeft / (25 * 60)) * 100}%` }}
            />
          </div> */}

          <svg className="w-40 h-40">
            <circle
              className="progress-ring__background" // Clase para el borde
              stroke="#E2E8F0" // Color del borde
              strokeWidth="8" // Grosor del borde
              fill="transparent"
              r="70" // Radio del círculo interno
              cx="50%"
              cy="50%"
            />
            <circle
              className="progress-ring__progress"
              stroke="#233DFF"
              strokeWidth="8"
              fill="transparent"
              r="70"
              cx="50%"
              cy="50%"
              style={{
                strokeDasharray: 440, // 2 * PI * r
                strokeDashoffset: 440 - (1 - timeLeft / (25 * 60)) * 440,
              }}
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="28"
              fill="#233DFF">
              {formatTime(timeLeft)}
            </text>
          </svg>
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
          <Button className="w-full bg-main-2" size="sm" onClick={handleStartStop} variant="default" >
            {isActive ? "Pause" : "Start"}
          </Button>
          <Button
            className="w-full"
            size="sm"
            variant="outline"
            onClick={handleReset}>
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Pomodoro;
