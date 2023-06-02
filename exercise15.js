/*Given a rectangular matrix of characters, add a border of asterisks(*) to it.


picture = ["abc",
           "ded"]


solution(picture) = ["*****",
                     "*abc*",
                     "*ded*",
                     "*****"]*/

function solution(picture) {

  

  let arrayFinal = []; // este va hacer el array final
  let palabrasModificadas =[];
  let valorDeAsteriscos;
  let filaAsteriscos = '';


  // iterar en el array, para poder agregarle el asterisco a las palabras.
for (let palabra = 0; palabra < picture.length; palabra++) {
   
    let combinacion = '*' + `${picture[palabra]}` + '*';
    palabrasModificadas.push(combinacion); 
}

palabrasModificadas.forEach(element => {
     
    valorDeAsteriscos = element.length;
    
});

for (let i = 0; i < valorDeAsteriscos; i++) {
    filaAsteriscos += '*';
    
}

arrayFinal=[filaAsteriscos,palabrasModificadas,filaAsteriscos];
arrayFinal=arrayFinal.flat();
return arrayFinal;
    

    }
