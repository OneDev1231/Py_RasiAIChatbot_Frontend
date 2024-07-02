"use client";
import { useTheme } from "next-themes";
import { useEffect, useCallback, useState } from "react";
import { useCookies } from "next-client-cookies";

import "./LightDark.css";

const LightDark = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const cookies = useCookies();

  useEffect(() => {
    const storedTheme = cookies.get("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("dark");
    }
    setMounted(true);
  }, [setTheme, cookies]);

  const handleChange = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    cookies.set("theme", newTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
  }, [theme, setTheme, cookies]);

  if (!mounted) return null;
  return (
    <div className={`${className} z-50 cursor-pointer`}>
      <label className="theme text-black dark:text-white">
        <span
          className={`
            ${theme === "light" ? `text-[20px]` : `text-[20px] text-gray-400`}
            hidden lg:block
          `}
        >
          Light
        </span>
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            checked={theme === "dark"}
            onChange={handleChange}
          />
          <span className="theme__icon">
            {Array.from({ length: 9 }, (_, index) => (
              <span key={index} className="theme__icon-part"></span>
            ))}
          </span>
        </span>
        <span
          className={`
            ${theme === "light" ? `text-[20px]` : `text-[20px] text-gray-400`}
            hidden lg:block
          `}
        >
          Dark
        </span>
      </label>
    </div>
  );
};

export default LightDark;
