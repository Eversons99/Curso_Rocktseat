/*No caso desta função independente, ela recebe como parâmetro number e Math
e retorna esses dados tratados*/
const random = (number, Math) =>    
    Math.floor(Math.random() * number);



// Recursive function
// Find the factorial of a number
const factorial = x => {
    
    //if number is 0 
    if (x === 0) {
        return 1;
    }
     return x * factorial(x - 1);

}