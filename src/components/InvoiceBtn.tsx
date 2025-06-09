import { Plus } from "lucide-react";

export const InvoiceBtn = () => {
  return (
    <div>
         {/* New Invoice Button */}
            <button className="w-full sm:w-[160px] h-[48px] bg-violet-500 hover:bg-violet-600 text-white rounded-full flex items-center justify-between px-4">
             <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <Plus size={18} className="text-violet-500" />
              </span>
              <span className="text-sm font-semibold">New Invoice</span>
            </button>
    </div>
  )
}
