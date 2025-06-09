import { ChevronDown } from "lucide-react";

export const FilterByStatus = () => {
  return (
    <div>
      {/* Filter Button */}
      <button className="flex items-center space-x-2 text-white text-sm font-semibold px-4 py-2 rounded-md w-full sm:w-auto justify-center">
        <span>Filter by Status</span>
        <ChevronDown size={16} className="text-violet-300" />
      </button>
    </div>
  );
};
