// import { EmptyState } from "./components/EmptyState";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <>
      <div className="flex bg-slate min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
        </div>
      </div>
    </>
  );
};
