// import { EmptyState } from "./components/EmptyState";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.add("theme-transition");

    const timeout = setTimeout(() => {
      document.documentElement.classList.toggle("dark-theme", isDarkMode);
      document.body.classList.remove("theme-transition");
    }, 300);

    return () => clearTimeout(timeout);
  }, [isDarkMode]);
  return (
    <>
      <main>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        {/* Content here */}
        <div
          className={`${
            isDarkMode ? "dark-theme" : ""
          } max-w-[730px] mx-auto px-6 pt-24 pb-6 sm:pt-14 lg:pt-16`}
        >
          <Header />
        </div>
      </main>
    </>
  );
};
