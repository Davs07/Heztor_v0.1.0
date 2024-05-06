import { ChevronRight } from "lucide-react";
import * as React from "react";

import { Separator } from "@/components/ui/separator";

import { usePathname } from "next/navigation";
import { controlNav, notionNav, managmentNav } from "../services/sideBarMenu";
import Link from "next/link";

interface SidebarMenu {
  label: string;
  icon: JSX.Element;
  type?: "button" | "filter" | "functionality";
  items?: SidebarMenu[];
  src?: string;
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
      <Link
        href={item.src ? item.src : "#"}
        className={`flex py-2 ${pathname === item.src && "bg-main-2/10 rounded-lg text-main-2"}`}>
        <li className={`flex items-center  cursor-pointer`} key={item.label}>
          {item.icon}
          <p className="font-medium">{item.label}</p>
        </li>
      </Link>
    );
  };

  const renderSubmenuItems = (items: SidebarMenu[]) => {
    return items.map((submenu) => {
      return (
        <li
          className="flex items-center py-2 pl-2 cursor-pointer"
          key={submenu.label}>
          <ChevronRight height={12} width={24} />
          <p className="line-clamp-1">{submenu.label}</p>
        </li>
      );
    });
  };

  const renderButton = (button: SidebarMenu) => {
    return (
      <></>
      // <button
      //   className="flex items-center cursor-pointer py-2 text-main-2  "
      //   key={button.label}>
      //   {button.icon}
      //   <p className="text-gray-700">{button.label}</p>
      // </button>
    );
  };

  return (
    <div className="w-full p-3 pt-8 flex flex-col gap-4 text-sm">
      <ul className="flex flex-col ">
        {sidebarItem.map((menu, index) =>
          menu.type === "functionality" ? (
            <>
              {/* {<Separator />} */}
              <Link
                href={menu.src ? menu.src : ""}
                className={`flex py-2 ${pathname === menu.src && "bg-main-2/15 rounded-lg text-main-2"}`}>
                <li className=" flex items-center cursor-pointe ">
                  {menu.icon}
                  <p className="font-medium">{menu.label}</p>
                </li>
              </Link>
              {menu.items && renderSubmenuItems(menu.items)}
            </>
          ) : menu.type === "button" ? (
            <>
              {renderButton(menu)}
              {/* {index > 0 && <Separator />} */}
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
