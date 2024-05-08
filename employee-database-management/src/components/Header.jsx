import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

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
    htmlElement.setAttribute("thme", newTheme);
  };

  return (
    <header className="flex justify-between">
      <h2 className="text-2xl font-bold">Employee Database Management</h2>
      <div className="flex gap-4 justify-center items-center">
        <button className="bg-buttonColor rounded-lg px-2 py-1 text-sm">Add Employee</button>
        {theme === "dark" ? <MdOutlineDarkMode className="text-2xl" onClick={() => themeHandler()} /> : <MdDarkMode className="text-2xl" onClick={() => themeHandler()} />}
      </div>
    </header>
  );
};

export default Header;
