/*Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.*/

let n=1230;

function solution(n) {
  let str = n.toString();
  let sizeString = str.length;
  let siguiente= Number(sizeString / 2); // me daria 2

  let arraycopy1;
  let arraycopy2;

  let array =[];
  let valores=[];

  for (let i = 0; i < str.length; i++) {
    valores = str[i];
    array.push(Number(valores));
  }


  arraycopy1=array;
  arraycopy2=array;

  let primerArray = arraycopy1.slice(0,siguiente);
  let segundoArray = arraycopy2.slice(siguiente);



  const initialValue = 0;
  const sumWithInitial = primerArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );


  const initialValue2 = 0;
  const sumWithInitial2 = segundoArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

 if(sumWithInitial ===sumWithInitial2){
    return true;
 }else{
    return false;
 }
 


   
   
        
    }