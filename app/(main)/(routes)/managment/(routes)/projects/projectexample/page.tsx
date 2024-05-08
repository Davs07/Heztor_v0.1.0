"use client";
import { CircleDot } from "lucide-react";

import { managementCollection } from "@/app/services/data";
import React from "react";
function page() {
  const [projects, setProjects] = React.useState(managementCollection.projects);

  return (
    <div className="w-full flex flex-col items-center justify-around  bg-main-superlight dark:bg-main-hiperdark fixed  ">
      <div>
        <h3 className="text-main-2 text-3xl">Projectos</h3>
      </div>
      <div>
        <div className="grid grid-rows-2 gap-1">
          <div className="flex text-sm">
            <div className="w-32 flex items-center justify-start gap-2">
              <CircleDot size={16} />
              <p>Estado</p>
            </div>
            <div>
              <p>Pendiente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
