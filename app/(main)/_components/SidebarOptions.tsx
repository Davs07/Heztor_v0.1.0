import {
  AlignLeft,
  ArrowRight,
  ChevronRight,
  Plus,
  PlusIcon,
  SeparatorHorizontal,
} from "lucide-react";
import * as React from "react";
import IconCalendarDay from "../Icons/Calendar/IconCalendarDay";
import IconCalendarWeek from "../Icons/Calendar/IconCalendarWeek";
import IconCalendarMonth from "../Icons/Calendar/IconCalendarMonth";
import { Separator } from "@/components/ui/separator";

import { usePathname } from "next/navigation";
import { controlNav, notionNav, managmentNav } from "../services/sideBarMenu";
import { SelectSeparator } from "@/components/ui/select";

interface SidebarMenu {
  label: string;
  icon: JSX.Element;
  type: "button" | "filter" | "functionality";
  items?: SidebarMenu[];
}

const SidebarOptions: React.FC = () => {
  const [sidebarItem, setSidebarItem] =
    React.useState<SidebarMenu[]>(controlNav);

  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/control") {
      setSidebarItem(controlNav);
    } else if (pathname === "/managment") {
      setSidebarItem(managmentNav);
    } else if (pathname === "/notion") {
      setSidebarItem(notionNav);
    }
  }, [pathname]);

  const renderSidebarItem = (item: SidebarMenu) => {
    return (
      <>
        <li className="flex items-center cursor-pointer" key={item.label}>
          {item.icon}
          <p className="font-medium">{item.label}</p>
        </li>
      </>
    );
  };

  const renderSubmenuItems = (items: SidebarMenu[]) => {
    return items.map((submenu) => {
      return (
        <li
          className="flex items-center pl-2 cursor-pointer"
          key={submenu.label}>
          <ChevronRight height={12} width={24} />
          <p className="line-clamp-1">{submenu.label}</p>
        </li>
      );
    });
  };

  const renderButton = (button: SidebarMenu) => {
    return (
      <button
        className="flex items-center cursor-pointer  text-main-2  "
        key={button.label}>
        {button.icon}
        <p>{button.label}</p>
      </button>
    );
  };

  return (
    <div className="w-full p-3 pt-8 flex flex-col gap-4 text-sm">
      <ul className="flex flex-col gap-2">
        {sidebarItem.map((menu, index) =>
          menu.type === "functionality" ? (
            <>
              {<Separator />}

              <li className=" flex items-center cursor-pointe ">
                {menu.icon}
                <p className="font-medium">{menu.label}</p>
              </li>
              {menu.items && renderSubmenuItems(menu.items)}
            </>
          ) : menu.type === "button" ? (
            <>
              {renderButton(menu)}
              {index > 0 && <Separator />}
            </>
          ) : (
            <>{renderSidebarItem(menu)}</>
          )
        )}
      </ul>
    </div>
  );
};

export default SidebarOptions;

{
  /* <ul className="flex flex-col   gap-2">
  <div className="flex items-center justify-between font-semibold text-slate-500">
    <p className="">Mis proyectos</p>
    <PlusIcon height={16} width={24} />
  </div>
  {taskList.map((task) => (
    <li key={task.id} className=" flex flex-row items-center w-full   ">
      <AlignLeft height={12} className="min-w-6" />
      <p className="line-clamp-1 ">{task.name}</p>
    </li>
  ))}
</ul> */
}
