"use client";

import { Moon, Sun } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";


const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [themIcon, setThemeIcon] = useState<null | ReactNode>(null);

  useEffect(() => {
    if (theme == "dark") {
      setThemeIcon(<Moon />);
    }
    else{
      setThemeIcon(<Sun />);
    }
  }, [theme]);

  return (
    <div>
      <Button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} variant="ghost"  >
        {themIcon}
        
      </Button>
    </div>
  );
};

export default ThemeToggler;
