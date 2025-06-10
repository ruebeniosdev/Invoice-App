
import plusIcon from "../assets/icon-plus.svg";
import { EmptyState } from "./EmptyState";
import chevron from "../assets/icon-arrow-down.svg";

export const Header = () => {
  return (
    <>
      <section className="w-full h-full">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1">Invoices</h1>
            <p className="text-muted text-xs text-[var(--color-muted)]">
              No invoices
            </p>
          </div>
          {/* Header Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-[var(--color-text)] cursor-pointer">
              {" "}
              <span className="text-xs font-bold">Filter by Status</span>
              <img className="" src={chevron} alt="dropdown" />
            </button>
            <button className="flex items-center gap-2 font-bold text-white bg-[#7C5DFA] px-4 py-2 rounded-full hover:bg-[#9277FF] transition">
              <img
                className="bg-white p-[11px] rounded-full"
                src={plusIcon}
                alt="plus icon"
              />
              New Invoice
            </button>
          </div>
        </div>
        {/* Empty State */}
        {/* or List of Invoices */}
        <EmptyState />
      </section>
    </>
  );
};
