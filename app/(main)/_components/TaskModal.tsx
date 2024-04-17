import { Calendar, Timer } from "lucide-react";
import React, { Component } from "react";

interface Task {
  id: number;
  name: string;
  description?: string;
  deadline: string;
  duration?: string;
  priority?: string;
  status: boolean;
}

type Props = {
  task: Task;
  CompleteTask: (id: number) => void;
  DeleteTask: (id: number) => void;
  EditTask: (id: number) => void;
};

type State = {};

export default class TaskModal extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="w-full ">
        <textarea
          defaultValue={this.props.task.name}
          placeholder="Nombre de la tarea"
          /*  onChange={(e) =>
            setNewTask({ ...newTask, name: e.target.value.trim() })
          } */
          className=" flex-1 text-sm font-normal bg-transparent text-slate-900 placeholder:text-slate-400 dark:text-white resize-none w-full focus:outline-none active:outline-none h-6 pt-[2px]"></textarea>
        <textarea
          defaultValue={this.props.task.description}
          className=" flex-1 text-sm font-normal bg-transparent text-slate-900 placeholder:text-slate-400 dark:text-white resize-none w-full focus:outline-none active:outline-none h-6 pt-[2px]"
        />

        {/* Duration */}
        <label
          htmlFor="duration"
          className="text-sm font-normal"
          onClick={() => {}}
          style={{ cursor: "pointer" }}>
          <Timer />
          <input
            type="time"
            name=""
            id="duration"
            step="1"
            defaultValue={this.props.task.duration}
            onChange={(event) => console.log(event.target.value)}
          />
        </label>

        {/* Deadline */}
        <label
          htmlFor="deadline"
          className="text-sm font-normal"
          onClick={() => {}}
          style={{ cursor: "pointer" }}>
          <Calendar />
          <input
            type="date"
            name=""
            id="deadline"
            defaultValue={this.props.task.deadline}
            onChange={(event) => console.log(event.target.value)}
          />
        </label>
      </div>
    );
  }
}
