// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:
// Input: s = "()"
// Output: true

function validParentheses(str){
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");
  let stack = [];

  for( let i = 0; i < str.length; i++ ){
    if( map.has(str[i])){
      stack.push(str[i]);
    } else {
      const lastOpenBracket = stack.pop();
      if( str[i] !== map.get(lastOpenBracket) ){
        return false;
      }
    }
  }
  if( stack.length !== 0 ) {
    return false;
  }
  return true;
}

console.log(validParentheses("([)]"))