import Logo from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.jpg";
import { Moon } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-20 md:w-24 bg-[#373B53] h-screen flex flex-col items-center py-6">
      <img
        src={Logo}
        alt="Logo"
        className="w-10 h-10 rounded-2xl bg-purple-600 p-2"
      />
      <div className="flex-grow"></div>
      <div className="mb-4 rounded-full ">
        <button className="my-4 px-2 text-white hover:text-purple-400">
          <Moon className="text-white w-5 h-5" size={20} />
        </button>
        <img
          src={Avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </aside>
  );
};

