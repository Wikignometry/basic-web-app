export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Wikignometry"
    );
  }

  if (query.toLowerCase().includes("plus")) {

    let A = query.split(" ")
    let x = parseInt(A[2])
    let y = parseInt(A[4])
    return (
      (x+y).toString()
    );
  }

  if (query.toLowerCase().includes("minus")) {

    let A = query.split(" ")
    let x = parseInt(A[2])
    let y = parseInt(A[4])
    return (
      (x-y).toString()
    );
  }

  if (query.toLowerCase().includes("largest")) {

    let A = query.split(" ")
    let x = parseInt(A[8])
    let y = parseInt(A[9])
    let z = parseInt(A[10])
    return (
      (Math.max(x, y, z)).toString()
    );
  }

  if (query.toLowerCase().includes("multiplied")) {

    let A = query.split(" ")
    let x = parseInt(A[2])
    let y = parseInt(A[5])
    return (
      (x*y).toString()
    );
  }

  var isSquare = function (n:number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  var isCubeRt = function (n:number) {
    return n > 0 && Math.cbrt(n) % 1 === 0;
  };

  // if (query.toLowerCase().includes("which of the following numbers is both a square and a cube:")) {

  //   let A = query.split(" ")
  //   let left = A.slice(12, )
  //   let map1 = left.map(parseInt)
  //   // let filter1 = map1.filter(isSquare)
  //   // let filter2 = filter1.filter(isCubeRt)

  //   return (
  //     left[1].toString()
  //   );
  // }

  return "";
}
