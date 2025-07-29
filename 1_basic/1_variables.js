//value can't be change in further code
const accountId =  144553 

//let: Declares a block-scoped variable that can be updated later.
let accountEmail = "asmita@google.com"

//var: Declares a variable with function-level scope (older JS style).
//var is not recommended in modern JavaScript due to scope issues. Use let or const instead.
var accountPassword = "12345"

//❗ This is an undeclared variable — no let, const, or var keyword.
//JavaScript will create it as a global variable, which is not good practice.
accountCity = "kolkata"

//uninitialised -> undefined
let accountState;

accountEmail = "asm@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountId,accountEmail,accountCity,accountState]) //print the details in table format

/**
 * | Keyword | Scope Type      | Description                                              |
| ------- | --------------- | -------------------------------------------------------- |
| `var`   | Function-scoped | Available inside the function where it's defined.        |
| `let`   | Block-scoped    | Available only within the `{}` block where it's defined. |

function testVarLet() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x); // ✅ Works: var is function-scoped
  console.log(y); // ❌ Error: let is block-scoped
}

 */