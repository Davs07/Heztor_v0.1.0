"use client";
import React, { useState } from "react";

interface Habit {
  id: number;
  name: string;
}

const daysOfWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const HabitsTracker: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: "Hábito 1" },
    { id: 2, name: "Hábito 2" },
    { id: 3, name: "Hábito 3" },
    // Agrega más hábitos aquí si es necesario
  ]);
  const [selectedDays, setSelectedDays] = useState<boolean[][]>(
    Array.from({ length: habits.length }, () => new Array(7).fill(false))
  );

  const toggleDay = (habitIndex: number, dayIndex: number) => {
    setSelectedDays((prevSelectedDays) => {
      const updatedDays = [...prevSelectedDays];
      updatedDays[habitIndex][dayIndex] = !updatedDays[habitIndex][dayIndex];
      return updatedDays;
    });
  };

  // Obtener el día actual
  const today = new Date().getDay(); // 0 para Domingo, 1 para Lunes, etc.

  // Calcular la semana actual
  const currentDate = new Date();
  const firstDayOfWeek = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay())
  );
  const weekDays = Array.from(
    { length: 7 },
    (_, i) => new Date(firstDayOfWeek.getTime() + i * 24 * 60 * 60 * 1000)
  );

  return (
    <div>
      <h1>Habit Tracker</h1>
      <div>
        <h2>Semana actual:</h2>
        <p>
          Desde {weekDays[0].toLocaleDateString()} hasta{" "}
          {weekDays[6].toLocaleDateString()}
        </p>
        <h2>Hábitos:</h2>
        {habits.map((habit, habitIndex) => (
          <div key={habit.id}>
            <h3>{habit.name}</h3>
            <div>
              {daysOfWeek.map((day, dayIndex) => (
                <label key={dayIndex}>
                  <input
                    type="checkbox"
                    checked={selectedDays[habitIndex][dayIndex]}
                    onChange={() => toggleDay(habitIndex, dayIndex)}
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitsTracker;
