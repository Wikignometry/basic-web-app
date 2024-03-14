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

  return "";
}
