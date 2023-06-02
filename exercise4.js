/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.*/


function solution(inputArray) {

    let arrayNuevo =[];
    let resultado;
 
    for (let index = 0; index < inputArray.length; index++) {
       resultado= inputArray[index]*inputArray[index + 1];
       arrayNuevo.push(resultado)
       arrayNuevo.sort(function(a, b) {
        return a - b;
      });

        
    }
    arrayNuevo.pop();
    console.log(arrayNuevo);
    return arrayNuevo[arrayNuevo.length -1 ]
}
