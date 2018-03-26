/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...inputs) {
    let total = 0;
    let soma = 0;
    for (let input of inputs){
        total++;
        soma += input;
    }
    return (soma/total);

}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
