import { Button } from "@/components/ui/button";
import { Calendar, Circle, CircleCheck, Timer } from "lucide-react";
import React, { Component } from "react";
import IconCalendar from "../Icons/FeaturesIcons/IconCalendar";
import IconStopWatch from "../Icons/FeaturesIcons/IconStopWatch";
import SelectPriority from "./SelectPriority";

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
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, taskEdited: Task) => void;
  color: string;
};

type State = {};

export default class TaskModal extends Component<Props, State> {
  state: Task = {
    id: this.props.task.id,
    name: this.props.task.name,
    description: this.props.task.description,
    deadline: this.props.task.deadline,
    duration: this.props.task.duration,
    priority: this.props.task.priority,
    status: this.props.task.status,
  };

  render() {
    return (
      <div className="w-full ">
        <div className="w-full flex items-center">
          <Button
            variant={"ghost"}
            size={"i"}
            className={`stroke-[.5] hover:bg-transparent  ${this.props.color}`}>
            {this.state.status ? (
              <CircleCheck
                className={`stroke-[2]  ${this.props.color}  `}
                height={18}
                onClick={() => this.props.completeTask(this.state.id)}
              />
            ) : (
              <Circle
                className={`stroke-[2]  ${this.props.color} `}
                height={18}
                onClick={() => this.props.completeTask(this.state.id)}
              />
            )}
          </Button>
          <textarea
            defaultValue={this.props.task.name}
            placeholder="Nombre de la tarea"
            onChange={(e) =>
              this.setState({ ...this.state, name: e.target.value.trim() })
            }
            className=" flex-1 text-sm font-normal bg-transparent text-slate-900 placeholder:text-slate-400 dark:text-white resize-none w-full focus:outline-none active:outline-none h-6 pt-[2px]"></textarea>
        </div>

        <div>
          <textarea
            defaultValue={this.props.task.description}
            className=" flex-1 text-sm font-normal bg-transparent text-slate-900 placeholder:text-slate-400 dark:text-white resize-none w-full focus:outline-none active:outline-none h-6 pt-[2px]"
          />
        </div>

        <div className="text-xs flex flex-wrap gap-3 w-full items-end ">
          <Button variant="none" size={"i"} className=" text-xs w-max px-1">
            <label htmlFor="duration">
              <IconStopWatch height="14" />
            </label>
            <input
              type="time"
              name=""
              step={1}
              id="duration"
              className="bg-transparent"
              defaultValue={this.state.duration}
              onChange={(event) =>
                this.setState({ ...this.state, duration: event.target.value })
              }
            />
          </Button>
          <Button variant="none" size={"i"} className=" text-xs w-max px-1 ">
            <label htmlFor="deadline">
              <IconCalendar height="14" />
            </label>
            <input
              type="date"
              placeholder="Fecha límite"
              name="fecha"
              id="deadline"
              className="bg-transparent bg-none"
              defaultValue={this.state.deadline}
              onChange={(event) =>
                this.setState({ ...this.state, deadline: event.target.value })
              }
            />
          </Button>

          <SelectPriority
            changePriority={(priority: string) => {
              this.setState({ ...this.state, priority: priority });
            }}
            priority={this.state.priority}
          />
        </div>

        <div className="flex gap-2 justify-end items-end">
          <Button
            onClick={() => this.props.editTask(this.state.id, this.state)}
            variant="none"
            size={"i"}
            className="bg-main-2 hover:bg-main-2 text-main-superlight w-max px-2 text-sm">
            Actualizar
          </Button>
        </div>
      </div>
    );
  }
}
