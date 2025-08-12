/**when the datatypes of the comparing elements are same then 
*comparison took place in normal manner but when the datatypes are different it shows 
*some abnormality. let see....
*/

console.log("2">1) //output: true , since string is converted to number and comparison took place
console.log("1">1) //output: false

//avoid these type of coding
console.log("null check")
console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0);//true 
/** 
 * the reason is that an equality check == and comparion > < >=
 * <= work differently.
 * comparisons convert null to a number, treating it as 0.
 * that's why (3) null>=0 is true and (1) null>0 is false. 
 * 
*/

console.log("undefined check")
console.log(undefined == 0)
console.log(undefined>=0)

// === Strict check, check also the datatypes
console.log("Strict check")
console.log("2" === 2)
