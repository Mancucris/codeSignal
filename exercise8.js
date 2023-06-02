/*After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).*/

function solution(matrix) {
    let totalSum = 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        if (matrix[row][col] === 0) {
          break; // Salir del bucle interno si se encuentra una habitación embrujada
        }
        totalSum += matrix[row][col]; // Sumar el costo de la habitación adecuada a la suma total
      }
    }
  
    return totalSum;
      
  }
  