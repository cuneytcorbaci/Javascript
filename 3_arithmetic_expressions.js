/*
aritmethic expression is a combination of ...
operands (values,variables,etc..)
operators(+ - * / %)
that can be evaluated to a value
ex. y = x + 5;
*/

let students = 20;

students = students + 1;
console.log(students); //sudents now 21.

students = students * students; // students (21) * sudtudent (21)
console.log(students); //students now 441

//students = students + 1; 
//students = students - 1;
//students = students / 2;

let extrastudents = students % 2; // 441 divided by 2 will find the remainder.(modulus)
console.log(extrastudents); // extrastudents now 1

//Augmented assigment operator.
let students2 = 20;
students2 += 1; // It simply adds the data on the right of the equation to the data on the left.
console.log(students2);//students2 now 21
students2 *=2; // students2 * 2
console.log(students2);//students2 now 42
//students2 +=1;
//students2 -=1;
//students2 *=2;
//students2 /=2;

/* Operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & substraction
*/
let result = 1 + 2 * (3 + 4); // 3+4 = 7 ... 7*2=14 ... 14+1=15
console.log(result); // result now 15.