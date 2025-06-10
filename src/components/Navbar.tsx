import Logo from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.jpg";
import { Moon } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-[#1E2139] w-full h-[72px] fixed z-[2000] lg:w-[72px] lg:h-screen lg:left-0 lg:top-0 lg:bottom-0">
      <div className="flex justify-between lg:flex-col lg:justify-between lg:h-full">
        <a
          href="#"
          className="flex justify-center items-center w-[72px] h-[72px] bg-[url('./assets/images/logo-bg.png')] bg-no-repeat bg-contain lg:w-full"
        >
          {" "}
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 rounded-2xl bg-purple-600 p-2"
          />
        </a>
        <div className="flex items-center gap-6 px-6 py-5 lg:flex-col lg:px-0 lg:py-6">
          <button className="bg-transparent cursor-pointer">
            <Moon className="text-white w-5 h-5" size={20} />
          </button>
          <div className="border-l border-[#979797] pl-5 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-5">
            <img
          src={Avatar}
          alt="User Avatar"
          className="w-8 h-8 rounded-full border-l-2 border-white"
        />
          </div>
        </div>
      </div>
    </nav>
  );
};
