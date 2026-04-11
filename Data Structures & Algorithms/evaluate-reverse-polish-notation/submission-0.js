class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
evalRPN (tokens) {
  const stack = [];

  for (const elem of tokens) { // Use 'of' for values
    if (elem === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (elem === "-") {
      const a = stack.pop(), b = stack.pop();
      stack.push(b - a);
    } else if (elem === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (elem === "/") {
      const a = stack.pop(), b = stack.pop();
      // Math.trunc handles the "truncate toward zero" requirement
      stack.push(Math.trunc(b / a));
    } else {
      // If it's not an operator, it's a number
      stack.push(Number(elem));
    }
  }
  return stack.pop(); // Return after the loop finishes
};
}
