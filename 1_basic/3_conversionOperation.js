let score="33abc"
console.log(typeof score);

let valueIntNumber = Number(score);
console.log(typeof valueIntNumber);
console.log(valueIntNumber); //NaN => Not a Number

score="33"
console.log(typeof score);

valueIntNumber = Number(score);
console.log(typeof valueIntNumber);
console.log(valueIntNumber); //33

// Boolean() 
// 1=> true; 0=> false
//"hitesh" => true; ""=>false

//String()


// *************************** Operations  *************************

let value = 3
let negValue = -value

console.log(negValue) //negative value

//string concatenation 
let str1="Asmita"
let str2="Bag"
let str3=str1+str2

console.log(str3)

//something new or trickey conversion
console.log("1"+2);
console.log(1+"2");

console.log("1"+2+2); //string is in first all conversion is in string
console.log(1+2+"2"); //number is in first numbers are added first and then string in concate

console.log(+true); //1
console.log(+"")//0

