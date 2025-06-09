import EmptyStatePhoto from "../assets/illustration-empty.svg";

export const EmptyState = () => {
  return (
    <div className="bg-slate text-white min-h-screen">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <img className="h-40 w-auto" src={EmptyStatePhoto} alt="emptyState" />
        </div>
        <h1 className="mt-6 text-lg font-semibold text-white">
          There is nothing here
        </h1>
        <p className="text-xs text-gray-600 mt-2">
          Create an invoice by clicking the <span className="block mt-1">New Invoice button and get started</span>
        </p>
      </div>
    </div>
  );
};
