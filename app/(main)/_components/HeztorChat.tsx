import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SendHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

function HeztorChat() {
  return (
    <Card className="w-full max-w-sm min-h-[300px] p-4 flex flex-col items-center justify-start gap-2">
      {/* <Image src="/heztor.svg" alt="Heztor logo" width={50} height={50} /> */}
      <div className="flex flex-row items-center text-main-extradark font-medium">
        <span>¿Qué quieres crear, Davs?</span>
      </div>

      <div className="grid grid-cols-4 gap-2 w-full">
        <Button variant={"blue"} size={"sm"}>
          Meta
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Tarea
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Hábito
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Nota
        </Button>
      </div>

      <div className="w-full flex-row flex justify-center gap-2">
        <label className="w-full ">
          <input
            placeholder="Escribe..."
            type="text"
            className="border-2 border-transparent bg-[#E6ECFF] pl-2 w-full h-8 outline-none overflow-hidden  rounded-xl transition-all duration-500 ease-in-out hover:border-main-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 "
          />
        </label>
        <span className=" flex  items-center justify-center ">
          <SendHorizontal />
        </span>
      </div>

      <div
        className="flex flex-wrap justify-center gap-[1px] text-sm"
        style={{ width: "300px" }}>
        <Button variant={"outline"} size={"sm"}>
          Ser un buen comunicador
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Hacer más dinero
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Ganar un concurso de matemática
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Comprarme una computadora
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Bajar de peso
        </Button>
      </div>
    </Card>
  );
}

export default HeztorChat;
