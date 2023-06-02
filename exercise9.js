/*Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].*/

inputArray = ["aba", "aa", "ad", "vcd", "aba"];

function solution(inputArray) {
    
 let arrayNuevo=[];
    let arrayFinal=[];
    let valordelArray;

    inputArray.forEach(element => {
        arrayNuevo.push(element.length);
       
    });

    arrayNuevo.sort(function(a, b) {
        return a - b;
      });

    valordelArray = arrayNuevo[arrayNuevo.length-1];



    arrayFinal = inputArray.filter(word => word.length >= valordelArray);

 return arrayFinal;
    }