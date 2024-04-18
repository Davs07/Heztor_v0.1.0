import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flag } from "lucide-react";
import IconFlag from "../Icons/FeaturesIcons/IconFlag";
import { useEffect, useState } from "react";

const priorities = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" },
];

type SelectProps = {
  changePriority: (priority: string) => void;
  priority?: string;
};

function SelectPriority({ changePriority, priority }: SelectProps) {
  const [selectedPriority, setSelectedPriority] = useState("");

  return (
    <Select
      defaultValue={priority ? priority : ""}
      onValueChange={(newValue) => changePriority(newValue)}>
      <SelectTrigger className="w-max h-6 text-main-2 flex flex-row gap-2  border border-main-2 bg-transparent">
        <SelectValue placeholder="Prioridad" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {priorities.map((priority) => (
            <SelectItem key={priority.value} value={priority.value}>
              <div className="flex flex-row gap-1 items-center w-max text-xs">
                <IconFlag height="12" /> {priority.label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectPriority;
