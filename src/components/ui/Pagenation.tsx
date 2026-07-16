type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
};

type PageItem = number | "...";

function getPageItems(currentPage: number, totalPages: number): PageItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  pageSizeOptions = [5, 10, 25],
  onPageChange,
  onPageSizeChange,
}: PaginationProps) {
  const startItem =
    totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;

  const endItem = Math.min(currentPage * pageSize, totalItems);

  const pageItems = getPageItems(currentPage, totalPages);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePrev = () => {
    if (!canGoPrev) return;
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (!canGoNext) return;
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="text-sm text-gray-700">
        全{totalItems}件中 {startItem}〜{endItem}件を表示
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
        {onPageSizeChange && (
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <span>表示件数</span>

            <select
              value={pageSize}
              onChange={(event) => {
                onPageSizeChange(Number(event.target.value));
              }}
              className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-primary-500"
            >
              {pageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}件
                </option>
              ))}
            </select>
          </label>
        )}

        <div className="hidden items-center gap-1 sm:flex">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="h-9 rounded-lg border border-slate-200 px-3 text-sm text-gray-700 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            前へ
          </button>

          <div className="flex items-center gap-1">
            {pageItems.map((pageItem, index) => {
              if (pageItem === "...") {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="flex h-9 min-w-9 items-center justify-center text-sm text-gray-700"
                  >
                    ...
                  </span>
                );
              }

              const isActive = pageItem === currentPage;

              return (
                <button
                  key={pageItem}
                  type="button"
                  onClick={() => onPageChange(pageItem)}
                  className={[
                    "flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm transition",
                    isActive
                      ? "hover:bg-amber-400 bg-amber-400"
                      : "text-gray-700 hover:bg-amber-200",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {pageItem}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            className="h-9 rounded-lg border border-slate-200 px-3 text-sm text-gray-700 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            次へ
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 sm:hidden">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="h-10 rounded-lg border border-slate-200 px-4 text-sm text-gray-700 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            前へ
          </button>

          <div className="text-sm font-medium text-slate-700">
            {currentPage} / {totalPages}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            className="h-10 rounded-lg border border-slate-200 px-4 text-sm text-slate-600 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            次へ
          </button>
        </div>
      </div>
    </div>
  );
}
