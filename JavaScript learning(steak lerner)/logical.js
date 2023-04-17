let k = 50, l = 100;
let operation = (k > 20) && (l < 150);
console.log("(" + k + " > 20) && (" + l + " > 150) == " + operation);

operation = (k > 20) || (l < 150);
console.log("(" + k + " > 20) || ("+ l +" < 150) == " + operation);

console.log("Operation = " + operation + " and Not Operation = " + !operation);

/**
 * And Operation Table
 * 
 * A B  R
 * T T  T 
 * T F  T
 * F T  F
 * F F  F
 * 
 * Or Operation Table
 * 
 * A B  R
 * T T  T 
 * T F  T
 * F T  T
 * F F  F
 */ 