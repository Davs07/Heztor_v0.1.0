"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import { toast } from "sonner";

function NotesPage() {
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "Notes",
    });

    toast.promise(promise, {
      loading: "Creando una nueva nota...",
      success: "Nota creada",
      error: "Error al crear la nota",
    });
  };

  return (
    <div className="w-full h-full  flex items-center justify-center bg-main-superlight dark:bg-main-superdark fixed">

      <Button onClick={onCreate} className="">
        <PlusCircle />
        Crea una nota
      </Button>
    </div>
  );
}

export default NotesPage;
