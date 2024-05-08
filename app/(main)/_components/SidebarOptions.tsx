import { ChevronRight, CircleCheck } from "lucide-react";
import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { controlCollection } from "@/app/services/data";
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
  const controlData = controlCollection;
  const pathname = usePathname();
  const [sidebarItem, setSidebarItem] = React.useState<SidebarMenu[]>([]);

  // Función para establecer el menú lateral inicial
  const initializeSidebar = () => {
    if (pathname === "/control/day") {
      setSidebarItem(controlNav);
    } else if (pathname === "/managment/day") {
      setSidebarItem(managmentNav);
    } else if (pathname === "/notion/day") {
      setSidebarItem(notionNav);
    }
  };

  // Llama a la función de inicialización al montar el componente
  React.useEffect(() => {
    initializeSidebar();
  }, []); // Sin dependencias para asegurar que se ejecute solo una vez al montar el componente

  const renderSidebarItem = (item: SidebarMenu) => {
    return (
      <Link
        href={item.src ? item.src : "#"}
        className={`flex py-2 ${pathname === item.src && "bg-main-2/10 rounded-lg text-main-2"}`}>
        <li className={`flex items-center  cursor-pointer`} key={item.label}>
          {item.icon}
          <p className="">{item.label}</p>
        </li>
      </Link>
    );
  };

  const renderSubmenuItems = (items: SidebarMenu[]) => {
    return items.map((submenu) => (
      <div className="py-2 pl-1 cursor-pointer" key={submenu.label}>
        <div className="flex items-center ">
          <ChevronRight height={12} width={24} />
          <p className="line-clamp-1">{submenu.label}</p>
        </div>
        <ul className="pl-2">
          {controlData.habits.map((habit, id) => (
            <li className="flex items-center py-2 cursor-pointer" key={id}>
              <CircleCheck size={10} width={24} />
              <p className="line-clamp-1">{habit.name}</p>
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
                  className={`flex py-2 ${pathname === menu.src && "bg-main-2/15 rounded-lg text-main-2"}`}>
                  <li className="flex items-center cursor-pointer">
                    {menu.icon}
                    <p className="">{menu.label}</p>
                  </li>
                </Link>
                {menu.items && renderSubmenuItems(menu.items)}
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
