let books =[
      {
        "id":"toKillAMockingbird",

      },
      {
        "id":"endersGame",

      },
      {
        "id":"1776",

      }
]

let nums = [
  {'id':'1776'},
  {'id':'endersGame'}]
let interse =[]
let diff = books
for (const book of books) {
  for (const num of nums) {
    if (num.id === book.id){
      interse.push(book);
      diff = diff.filter((b) => (b.id!==book.id))
    }
  }
}


console.log(interse);
console.log('diff ');
console.log(diff);
