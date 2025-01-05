/* _______________________________________________________________________________________________________________
 * 1. Implement a stack to reverse a string.
 * _______________________________________________________________________________________________________________
 */

function reverseStr(str) {
  const array = str.split(" ");
  const stack = [];

  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }

  let result = "";
  while (stack.length !== 0) {
    result += " " + stack.pop();
  }

  return result.trim();
}

console.log(reverseStr("Hello, World!"));

/* _______________________________________________________________________________________________________________
 * 2. Evaluate a postfix expression using a stack.
 * _______________________________________________________________________________________________________________
 */

function evaluatePostfix(expression) {
  const stack = [];
  const tokens = expression.split(" ");

  for (let token of tokens) {
    
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
        default:
          throw new Error(`Invalid operator: ${token}`);
      }
    }
  }

  return stack.pop();
}

// Example Usage
const postfixExpression = "5 1 2 + 4 * + 3 -";
console.log(evaluatePostfix(postfixExpression)); 


/* _______________________________________________________________________________________________________________
 * 3. Use a stack to check if an expression has balanced parentheses.
 * _______________________________________________________________________________________________________________
 */

function balancedParentheses(expression) {
  let stack = [];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == "{" || expression[i] == "(" || expression[i] == "[") {
      stack.push(expression[i]);
    } else {
      if (
        expression[i] == "}" ||
        expression[i] == ")" ||
        expression[i] == "]"
      ) {
        if (stack.length === 0) {
          return false;
        }

        const top = stack.pop();
        if (
          (expression[i] == ")" && top !== "(") ||
          (expression[i] == "}" && top !== "{") ||
          (expression[i] == "]" && top !== "[")
        ) {
          return false;
        }
      }
    }
  }

  return stack.length == 0;
}

console.log(balancedParentheses("(}{}{{}(){}"));
console.log(balancedParentheses("(){}[(){}]"));

/* _______________________________________________________________________________________________________________
 * 4. Design a stack that supports getting the minimum element in O(1) time.
 * _______________________________________________________________________________________________________________
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) return "underflow";
    return this.items[0];
  }

  pop() {
    if (this.isEmpty()) return "underflow";
    return this.items.pop();
  }
}

const stack = new Stack();

stack.push(12);
stack.push(13);
stack.push(14);
console.log(stack.pop(13));
console.log(stack.peek());
stack;

/* _______________________________________________________________________________________________________________
 * 5. Implement two stacks in a single array.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 6. Use a stack to convert infix expressions to postfix.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 7. Solve a Tower of Hanoi problem with a stack.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 8. Reverse a linked list using a stack.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 9. Find the next greater element for each array element using a stack.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 10. Check for redundant parentheses in a mathematical expression.
 * _______________________________________________________________________________________________________________
 */
