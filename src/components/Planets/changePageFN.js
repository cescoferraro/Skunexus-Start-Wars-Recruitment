export function changePageFN(page, setPage, pages) {
  return (mode) => () => {
    let number = mode === "next" ? page + 1 : page - 1;
    if (number > 0 && number <= pages) {
      setPage(number);
    }
  };
}
