import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

interface TaskDashboardProps {
  tasks: Task[];
  events: Event[];
}

interface Task {
  id: string;
  name: string;
  description?: string;
  dueDate: Date;
  priority: Priority;
  idProject?: string;
  status: boolean;
}

interface Event {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  idProject?: string;
  status: boolean;
}

type Priority = "P1" | "P2" | "P3" | "P4";

const TaskDashboard: React.FC<TaskDashboardProps> = ({ tasks, events }) => {
  return (
    <Tabs defaultValue="tasks" className="w-full flex flex-col justify-center ">
      <div className="w-full flex justify-center items-center">
        <TabsList className="w-max">
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="tasks">
        {tasks.map((task) => (
          <div className="flex items-center p-4 gap-4" key={task.id}>
            <div className="text-sm w-16 font-medium">
              {task.dueDate.toLocaleString().split(",")[1]}
            </div>
            <div className="flex-1">
              <Card className="w-full">
                <CardContent className="p-2">
                  <div className="grid gap-1.5">
                    <div className="text-sm font-medium">{task.name}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="events">
        {events.map((event) => (
          <div className="flex items-center p-4 gap-4" key={event.id}>
            <div className="text-sm w-16 font-medium">
              {event.startDate.toLocaleString().split(",")[1]}
            </div>
            <div className="flex-1">
              <Card>
                <CardContent className="p-2">
                  <div className="grid gap-1.5">
                    <div className="text-sm font-medium">{event.name}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
};

export default TaskDashboard;
