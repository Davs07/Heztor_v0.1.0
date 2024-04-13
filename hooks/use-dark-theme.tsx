import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const useDarkTheme = (): boolean => {
  const { systemTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    setDarkTheme(
      theme === "dark" || (theme !== "light" && systemTheme === "dark")
    );
  }, [theme, systemTheme]);

  return darkTheme;
};

export default useDarkTheme;
