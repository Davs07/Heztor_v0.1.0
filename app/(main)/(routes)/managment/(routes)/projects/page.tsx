"use client";
import { CircleDot } from "lucide-react";

import { managementCollection } from "@/app/services/data";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
function page() {
  const [projects, setProjects] = React.useState(managementCollection.projects);

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <div className="flex items-center justify-center">
        <h3 className="text-main-2 text-3xl">Projectos</h3>
      </div>
      <div className="w-full grid grid-cols-3 h-full">
        <div className=" flex flex-col h-full items-center justify-start">
          <h4 className="text-xl text-green-500">TO DO</h4>

          {projects
            .filter((project) => project.status === "to do")
            .map((project, index) => (
              <Card>
                <CardHeader>
                  <h3 className="text-lg" key={index}>
                    {project.name}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{project.priority}</Badge>
                    <Badge>{project.status}</Badge>
                    <Badge>{project.startDate.toLocaleString()}</Badge>
                    <Badge>{project.endDate.toLocaleString()}</Badge>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
        <div className=" flex flex-col h-full items-center justify-start">
          <h4 className="text-xl text-blue-500">IN PROGRESS</h4>
          {projects
            .filter((project) => project.status === "in progress")
            .map((project, index) => (
              <Card>
                <CardHeader>
                  <h3 className="text-lg" key={index}>
                    {project.name}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{project.priority}</Badge>
                    <Badge>{project.status}</Badge>
                    <Badge>{project.startDate.toLocaleString()}</Badge>
                    <Badge>{project.endDate.toLocaleString()}</Badge>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
        <div className=" flex flex-col h-full items-center justify-start">
          <h4 className="text-xl text-rose-500">Completed</h4>

          {projects
            .filter((project) => project.status === "completed")
            .map((project, index) => (
              <Card>
                <CardHeader>
                  <h3 className="text-lg" key={index}>
                    {project.name}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{project.priority}</Badge>
                    <Badge>{project.status}</Badge>
                    <Badge>{project.startDate.toLocaleString()}</Badge>
                    <Badge>{project.endDate.toLocaleString()}</Badge>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}

export default page;
