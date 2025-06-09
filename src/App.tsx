import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <>
        <div className="flex bg-[#F8F8FB] dark:bg-[#141625] min-h-screen">
          <Sidebar />
        </div>
    </>
  );
};
