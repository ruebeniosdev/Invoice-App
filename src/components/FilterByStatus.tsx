import chevron from '../assets/icon-arrow-down.svg'

export const FilterByStatus = () => {
  return (
    <div>
      {/* Filter Button */}
      <button className="flex items-center space-x-2 text-sm font-semibold px-4 py-2 rounded-md w-full sm:w-auto justify-center">
        <span className='text-xs font-bold'>Filter by Status</span>
        <img src={chevron} alt="dropdown" />
      </button>
    </div>
  );
};
