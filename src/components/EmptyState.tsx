import EmptyStatePhoto from "../assets/illustration-empty.svg";

export const EmptyState = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
          <div className="max-w-[15rem] flex flex-col items-center gap-10 sm:gap-16 text-center">
            <img
              src={EmptyStatePhoto}
              alt="empty State"
            />
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-xl font-bold ">There is nothing here</h3>
              <p className="text-muted text-xs text-[var(--color-muted)]">
                Create an invoice by clicking the <strong>New Invoice</strong> button
                and get started
              </p>
            </div>
          </div>
        </div>
  );
};
