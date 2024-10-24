export default function Pagination({
  currentPage,
  totalRecords,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalRecords / 10);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between items-center mt-4 text-slate-950">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-lg">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
