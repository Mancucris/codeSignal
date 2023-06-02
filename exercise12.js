/*Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].*/

function solution(a) {
    const sorted = a.filter((num) => num !== -1).sort((a, b) => a - b);
    let j = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== -1) {
        a[i] = sorted[j];
        j++;
      }
    }
  
    return a;
  }
  