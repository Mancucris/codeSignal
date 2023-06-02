/*Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.*/

function solution(n) {
    
    if(n === 1){
             return 1
         }
     
          let resultado=1;
          let incremento = 4;
          let numeros=[];
    
             for (let index =0; index <=  n; index++) {
             
             resultado= resultado + (index * incremento);
             numeros.push(resultado);
         };
  
        numeros.pop();
        return numeros[numeros.length-1];
          
        }
        
