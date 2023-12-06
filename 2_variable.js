// A variable is a container for storing data.
// A variable behaves as if it was the value that is contains.

// Two steps to creating a variable:
//1. Declaration (var,let,const)
//2. assgiment ( = assgigment operator)

//In other words, a variable created with let is only accessible within the curly brackets where it is created and cannot be used outside of it.

let age;
age = 21;
console.log(age);

let age2=21;
console.log(age2);

age=age+1; //my age is now 22
console.log(age);

//This is a number datatype.

//Another data type is string. A string is a series of characters (abcdef..)
let first_name="Cuneyt"; //We can use it inside a series of double quotes.
let last_name="Corbaci";
console.log(first_name);

//Another data type is a boolean.A boolean is only one of two values,true or false
let student = true;
console.log(student);

//We write our message in quotes. Then we write the data name as follows.
console.log("Hello");
console.log("My first name is",first_name,"and last name is",last_name);
console.log("My age is",age,"years old.");
console.log("Enrolled:",student);