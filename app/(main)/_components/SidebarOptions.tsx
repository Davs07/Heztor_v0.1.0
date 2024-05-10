import { ChevronRight, CircleCheck } from "lucide-react";
import * as React from "react";
import { Separator } from "@/components/ui/separator";
import {
  controlCollection,
  managementCollection,
  notionCollection,
} from "@/app/services/data";
import { usePathname } from "next/navigation";
import { controlNav, notionNav, managmentNav } from "../data/sideBarMenu";
import Link from "next/link";

interface SidebarMenu {
  label: string;
  icon: JSX.Element;
  type?: "button" | "filter" | "functionality";
  items?: SidebarMenu[];
  src?: string;
}

const SidebarOptions: React.FC = () => {
  const pathname = usePathname();

  const [subItems, setSubItems] = React.useState<Object[]>(
    controlCollection.habits
  );
  const [sidebarItem, setSidebarItem] =
    React.useState<SidebarMenu[]>(controlNav);

  const initializeSidebar = () => {
    if (pathname === "/control/day") {
      setSidebarItem(controlNav);
      setSubItems(controlCollection.habits);
    } else if (pathname === "/managment/day") {
      setSidebarItem(managmentNav);
      setSubItems(managementCollection.tasks);
    } else if (pathname === "/notion/day") {
      setSidebarItem(notionNav);
      setSubItems(notionCollection.notes);
    }
  };

  React.useEffect(() => {
    initializeSidebar();
  }, []);

  const renderSidebarItem = (item: SidebarMenu) => {
    return (
      <Link
        href={item.src ? item.src : "#"}
        className={`flex py-2 ${pathname === item.src && "bg-main-2/10 rounded-lg text-main-2"}`}
        key={item.label}>
        <li className={`flex items-center  cursor-pointer`} key={item.label}>
          {item.icon}
          <p className="">{item.label}</p>
        </li>
      </Link>
    );
  };

  const renderSubmenuItems = (items: SidebarMenu[], subItems: any) => {
    return items.map((submenu) => (
      <div className="py-2 pl-1 cursor-pointer" key={submenu.label}>
        <div className="flex items-center ">
          <ChevronRight height={12} width={24} />
          <p className="line-clamp-1">{submenu.label}</p>
        </div>
        <ul className="pl-2">
          {/* Renderizamos los hábitos específicos de cada colección */}
          {subItems?.map((item: any) => (
            <li
              className="flex items-center py-2 cursor-pointer"
              key={item.name}>
              <CircleCheck size={10} width={24} />
              <p className="line-clamp-1">{item.name || item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  const renderButton = (button: SidebarMenu) => <></>; // No renderizamos botones por ahora

  return (
    <div className="w-full p-3 pt-8 flex flex-col gap-4 text-sm">
      <ul className="flex flex-col">
        {sidebarItem.map((menu, index) => (
          <React.Fragment key={index}>
            {menu.type === "functionality" ? (
              <>
                <Link
                  href={menu.src ? menu.src : ""}
                  className={`flex py-2 ${pathname === menu.src && "bg-main-2/15 rounded-lg text-main-2"}`}
                  key={menu.label}>
                  <li
                    className="flex items-center cursor-pointer"
                    key={menu.label}>
                    {menu.icon}
                    <p className="">{menu.label}</p>
                  </li>
                </Link>
                {/* Renderizamos los submenús */}
                {menu.items && renderSubmenuItems(menu.items, subItems)}
                {}
              </>
            ) : menu.type === "button" ? (
              renderButton(menu)
            ) : (
              renderSidebarItem(menu)
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default SidebarOptions;
