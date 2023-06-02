/* Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed. */

function solution(statues) {

    let primervalor;
      let segundovalor;
  
      let array1size= statues.length;
      let array2=[];
  
      let resultado;
  
      statues.sort(function(a, b) {
          return a - b;
        });
  
        primervalor=statues[0];
        segundovalor=statues[statues.length -1]
  
  
        for (let index = primervalor; index <=segundovalor; index++) {
           array2.push(index); 
        }
  
  
       
  
       resultado = array2.length - array1size;
       return resultado;
       }