import { navigation } from "../services/Navigation.js";
import { usePathname } from "next/navigation.js";
import Link from "next/link";
import { cn } from "@/lib/utils.js";
import { Button } from "@/components/ui/button.jsx";

const Nav = () => {
  const navigationSec = navigation;
  const pathname = usePathname();

  return (
    <div className="w-12 h-full">
      <ul
        className={cn(
          "flex flex-row justify-center items-center gap-4 text-slate-700 dark:text-white"
        )}>
        {navigationSec.map((Menu, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`group hover:bg-[#E6ECFF] rounded-xl ${
              pathname === Menu.src
                ? "  text-white hover:text-white bg-main-2 hover:bg-main-2 "
                : ""
            }   text-sm `}>
            <Link
              href={Menu.src}
              passHref={true}
              className={`flex justify-center items-center `}>
              <span className={`text-lg  `}>{Menu.icon}</span>
              <span className={cn("hidden")}>{Menu.title}</span>
            </Link>
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
