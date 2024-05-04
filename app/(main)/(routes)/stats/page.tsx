import { Button } from "@/components/ui/button";
import Wrapper from "../../_components/Wrapper";
import { GraduationCap } from "lucide-react";
import TittleSection from "../../_components/TittleSection";

const financePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <TittleSection>Mis finanzas</TittleSection>

      <div className="flex gap-8 items-center justify-center mt-8  text-slate-500 dark:text-white">
        <div className="  h-[240px] w-[240px]   dark:bg-main-superdark rounded-full bg-white hover:shadow-2 border-main-extradark/30 z-50 flex flex-col items-center justify-center cursor-pointer">
          <p className=" text-xs text-center">Balance total</p>
          <p className=" text-xl text-center">S/. 1500.00</p>
        </div>
      </div>

      <div className="mt-1 relative group rounded-2xl flex justify-center text-sm items-center transition-transform duration-300 ease-in-out text-main-extradark/50 gap-1 group hover:text-main-extradark/70">
        <Button
          variant={"ghost"}
          className="group-hover:opacity-100 bg-[#E9EAF2] opacity-0 rounded-2xl  w-1/2 flex justify-center transition-opacity duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
        </Button>

        <div className="flex absolute items-center gap-1 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          <p>Registrar operación</p>
        </div>

        <Button
          variant={"ghost"}
          className="group-hover:opacity-100 bg-[#E9EAF2] opacity-0 w-1/2 flex justify-center transition-opacity duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-dash-lg"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
            />
          </svg>
        </Button>
      </div>

      <Wrapper className="flex  justify-between border-rose-600">
        <div className="flex flex-row text-center content-center gap-1">
          <div className="bg-[#E9EAF2] bg-main-2/[0.2]  rounded-lg flex items-center h-max p-1">
            <GraduationCap className="h-8 w-8  stroke-main-2" />
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
    </div>
  );
};

export default financePage;
