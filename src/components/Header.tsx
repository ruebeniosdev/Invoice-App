
import { FilterByStatus } from "./FilterByStatus";
import { InvoiceBtn } from "./InvoiceBtn";

export const Header = () => {
  return (
    <div className="bg-slate text-white min-h-screen">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Heading */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-1 md:mb-2">Invoices</h1>
            <p className="text-slate-400 text-sm">No invoices</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full sm:w-auto">
            <FilterByStatus />

           <InvoiceBtn />
          </div>
        </div>
      </div>
    </div>
  );
};
 