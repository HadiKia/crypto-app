// styles 
const paginationStyle = "text-[#F1F1F1] w-fit flex justify-between items-center gap-x-1.5 md:gap-x-3 mx-auto mb-10"
const buttonStyle = "font-medium px-2 md:px-4 py-2 rounded md:rounded-lg text-xs md:text-base"
const disabledStyle = `${buttonStyle}  text-[#5367FF] opacity-40 cursor-not-allowed`
const pStyle = "text-[#9295A6] font-medium py-1 px-1.5 md:p-2 text-xs md:text-base cursor-pointer"
const pActiveStyle = "text-[#FFFFFF] bg-[#5367FF] font-medium py-1 px-1.5 md:p-2 rounded md:rounded-md text-xs md:text-base cursor-pointer"

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 203) return;
    setPage((page) => page + 1);
  };

  return (
    <div className={paginationStyle}>
      <button onClick={previousHandler} className={page === 1 ? disabledStyle : `${buttonStyle} bg-[#121318] text-[#5367FF]`}>Previous</button>
      <p className={page === 1 ? pActiveStyle : pStyle} onClick={() => setPage(1)}>1</p>
      <p className={page === 2 ? pActiveStyle : pStyle} onClick={() => setPage(2)}>2</p>
      <p className={page === 3 ? pActiveStyle : `${pStyle} `} onClick={() => setPage(3)}>3</p>
      {page > 3 && page < 202 && (
        <>
          <span className={page === 4 ? "hidden" : "text-[#9295A6]"}>...</span>
          <p className={pActiveStyle}>{page}</p>
        </>
      )}
      <span className={page === 201 ? "hidden" : "text-[#9295A6]"}>...</span>
      <p className={page === 202 ? pActiveStyle : pStyle} onClick={() => setPage(202)}>202</p>
      <p className={page === 203 ? pActiveStyle : pStyle} onClick={() => setPage(203)}>203</p>
      <button onClick={nextHandler} className={page === 203 ? disabledStyle : `${buttonStyle} bg-[#5367FF] text-[#FFFFFF]`}>Next</button>
    </div>
  );
}

export default Pagination;
