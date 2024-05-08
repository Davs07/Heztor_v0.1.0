"use client";
import { CircleDot } from "lucide-react";

import { managementCollection } from "@/app/services/data";
import React from "react";
function page() {
  const [projects, setProjects] = React.useState(managementCollection.projects);

  return (
    <div className="flex flex-col w-full">
      <div>
        <h3 className="text-main-2 text-3xl">Projectos</h3>
      </div>
      <div className="w-full grid grid-cols-3 h-full">
        <div className=" flex flex-col items-center justify-start">
          <h4 className="text-2xl text-green-500">TO DO</h4>
        </div>
        <div className=" flex flex-col items-center justify-start">
          <h4 className="text-2xl text-blue-500">IN PROGRESS</h4>
        </div>
        <div className=" flex flex-col items-center justify-start">
          <h4 className="text-2xl text-rose-500">COMPLETED</h4>
        </div>
      </div>
    </div>
  );
}

export default page;
