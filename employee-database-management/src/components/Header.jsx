import { useEffect, useState } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const themeAttribute = htmlElement.getAttribute("theme");
    setTheme(themeAttribute);
  }, []);

  const themeHandler = () => {
    console.log("themeHandler");
    const htmlElement = document.querySelector("html");
    const themeAttribute = htmlElement.getAttribute("theme");
    const newTheme = themeAttribute === "dark" ? "light" : "dark";
    htmlElement.setAttribute("theme", newTheme);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
      <h2 className="text-xl md:text-2xl font-bold">
        Employee Database Management
      </h2>
      <div className="flex gap-4 justify-center items-center self-end ">
        <button className="bg-buttonColor rounded-lg px-2 py-1 text-sm">
          Add Employee
        </button>
        {theme === "dark" ? (
          <FaMoon className="text-2xl" onClick={() => themeHandler()} />
        ) : (
          <FaRegMoon className="text-2xl" onClick={() => themeHandler()} />
        )}
      </div>
    </header>
  );
};

export default Header;
