import { IPagination } from "@app_types/index";

interface IProps extends IPagination {
  count: number;
  changePaginate: (obj: IPagination) => void;
}
// TODO: a lof of buttons
export default function BasePagination({
  count,
  page,
  page_size,
  changePaginate,
}: IProps) {
  const countPaginateBtns = Math.ceil(count / page_size);

  const handleClickPaginate = (p: number) => {
    const isPageAlreadyActive = p === page;
    if (isPageAlreadyActive) return;
    changePaginate({ page: p, page_size });
  };

  const handleClickStart = () => {
    const isFirstPageAlreadyActive = page === 1;
    if (isFirstPageAlreadyActive) return;
    handleClickPaginate(1);
  };

  const handleClickEnd = () => {
    const isEndPageAlreadyActive = page === countPaginateBtns;
    if (isEndPageAlreadyActive) return;
    handleClickPaginate(countPaginateBtns);
  };

  const paginateBtns = Array.from(
    Array(countPaginateBtns),
    (_, i) => i + 1
  ).map((p) => {
    return (
      <li
        className={`page-item ${p === page ? "active" : ""}`}
        aria-current="page"
        onClick={() => handleClickPaginate(p)}
        key={p}
      >
        <a className="page-link" href="#">
          {p}
        </a>
      </li>
    );
  });
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          className={`page-item ${page === 1 ? "disabled" : ""}`}
          onClick={handleClickStart}
        >
          <a className="page-link" href="#">
            Начало
          </a>
        </li>
        {paginateBtns}
        <li
          className={`page-item ${
            page === countPaginateBtns ? "disabled" : ""
          }`}
          onClick={handleClickEnd}
        >
          <a className="page-link" href="#">
            Конец
          </a>
        </li>
      </ul>
    </nav>
  );
}
