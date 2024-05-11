"use client";
import { CircleDot } from "lucide-react";

import { managementCollection } from "@/app/services/data";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Page() {
  // Cambié "page" por "Page" para que cumpla con la convención de nombres de componentes de React
  const [project, setProject] = React.useState(
    managementCollection.projects[0]
  );

  const [projectInfo, setProjectInfo] = React.useState([
    { label: "Fecha de inicio", value: project.startDate.toLocaleString() },
    { label: "Fecha de fin", value: project.endDate.toLocaleString() },
    { label: "Estado", value: project.status },
    { label: "Prioridad", value: project.priority },
    { label: "Etiquetas", value: project.tags.join(", ") },
  ]); // Cambié el objeto por un array de objetos para facilitar el mapeo en JSX

  interface DynamicComponentProps {
    componentName: string;
    props?: Record<string, any>;
    children?: React.ReactNode;
  }

  const DynamicComponent: React.FC<DynamicComponentProps> = ({
    componentName,
    props,
    children,
  }) => {
    let Component: React.ElementType;

    switch (componentName) {
      case "Badge":
        Component = Badge;
        break;
      case "Button":
        Component = Button;
        break;
      case "Input":
        Component = Card;
        break;
      default:
        Component = () => <div>Componente no reconocido</div>;
    }

    return <Component {...props}>{children}</Component>;
  };

  return (
    <div className="w-full h-full flex flex-col p-3 gap-8 items-center justify-start bg-main-superlight dark:bg-main-hiperdark fixed">
      <div>
        <h3 className="text-main-2 text-3xl">{project.name}</h3>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3">
          {projectInfo.map((data, index) => (
            <div className="flex text-sm" key={index}>
              <div className="flex items-center justify-start w-36 text-gray-500 gap-2">
                <CircleDot size={16} />
                <p>{data.label}</p>
              </div>
              <div>
                <DynamicComponent
                  componentName="Badge"
                  props={{ variant: "primary" }}>
                  <p>{data.value}</p>
                </DynamicComponent>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border  bg-white max-w-[600px] w-full h-max rounded-lg p-2 text-gray-700 text-sm">
        <textarea
          className="bg-transparent w-full h-full"
          defaultValue={project.description}></textarea>
      </div>
    </div>
  );
}

export default Page;
