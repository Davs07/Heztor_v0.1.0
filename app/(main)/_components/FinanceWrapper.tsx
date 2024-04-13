import React from "react";
import Wrapper from "./Wrapper";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinanceWrapper() {
  return (
    <Wrapper className="flex  justify-between">
      <div className="flex flex-row text-center content-center gap-1">
        <div className="bg-[#E9EAF2] rounded-lg flex items-center h-max p-1">
          <GraduationCap className="h-8 w-8  " />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-xs">Gastos de la tarea de Invope</p>
          <h6>S/. 600.50</h6>
        </div>
      </div>
      <Button
        variant={"ghost"}
        size={"i"}
        className=" opacity-0 group-hover:opacity-100 self-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-three-dots"
          viewBox="0 0 16 16">
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
        </svg>
      </Button>
    </Wrapper>
  );
}
