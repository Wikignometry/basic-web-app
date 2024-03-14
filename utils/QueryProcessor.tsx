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

  return "";
}
