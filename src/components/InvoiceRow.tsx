import data from "../data/data.json";

export const InvoiceRow = () => {
  return (
    <div className=" text-white p-4 ">
      <ul className="space-y-4">
        {data.map((invoice) => (
          <li
            key={invoice.id}
            className="bg-[#1E2139] rounded-xl p-4 flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <div className="flex flex-col md:flex-row md:items-center space-x-40 text-xs">
              <span className="font-bold">#{invoice.id}</span>
              <span className="text-gray-400 font-medium ">
                Due {invoice.paymentDue}
              </span>
              <span className="text-gray-300 font-medium">
                {invoice.clientName}
              </span>
              <span className="text-green-400 font-bold text-base">
                €{Number(invoice.total).toFixed(2)}
              </span>
              <span
                className={`font-bold text-xs px-2 py-1 rounded ${
                  invoice.status === "paid"
                    ? "bg-green-700 text-white"
                    : invoice.status === "pending"
                    ? "bg-[#FF8F00] text-white"
                    : "bg-[#DFE3FA] text-white"
                }`}
              >
                {invoice.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
