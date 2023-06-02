/*Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".*/

inputString = "(bar)"

function solution(inputString) {
 const stack = [];
  for (let char of inputString) {
    if (char === ')') {
      let reversedSubstring = '';
      while (stack[stack.length - 1] !== '(') {
        reversedSubstring += stack.pop();
      }
      stack.pop(); // Remove the opening parenthesis '('
      stack.push(...reversedSubstring);
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}


solution(inputString);
