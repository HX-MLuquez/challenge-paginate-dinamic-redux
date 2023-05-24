// ____________________\\
// *** code Paginate *** \\
/*\\_______________________//*/

export default function cartsPerPage(pageAmount, moviesAll) {
  // [{}{}{}{}{}{}{}{}] ->
  // 0     1     2     3
  // [[{}{}][{}{}][{}{}][{}{}]]
  const arrResult = [];
  for (let index = 0; index < moviesAll.length; index += pageAmount) {
    const page = moviesAll.slice(index, index + pageAmount);
    arrResult.push(page);
  }
  return arrResult;
}
