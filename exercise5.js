/*Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.*/

function solution(a, b) {


    let solucion = true;
  
    a.sort(function(a, b){return a - b});
    b.sort(function(a, b){return a - b});
  
   for (let index = 0; index < a.length; index++) {
      
      if(a[index] != b[index]){
          solucion = false;
          break
      }
   }
  
   return solucion;
  
  
      
  }
  