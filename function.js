/*document.write("Hii");
console.log("Welcome");
//How to write a function
function function_name(){
    console.log("ABCD");
}*/
//Demo of function call
/*
console.log('A');
function f1(){
    console.log("F1");
}
function f2(){
    console.log("F2");
}
f2()
f1()
console.log("B");
*/
//Here we called f2() first so the o/p will be in the A,F2,F1,B
//Write a function to give sum of two numbers
//Inputs of the functions are called as parameters
function add (num1, num2){
    var total = num1 + num2 ;
    console.log(total);
}
//add("3",1)
//add(3,1);

//Taking input from the user
/*var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
num1 = parseInt(num1);
num2 = parseInt(num2);
add(num1,num2);
add(num1,num2,13);
add(num1,13);*/
//Return function
function mul(num1 , num2){
    var total = num1 * num2;
    return total;
}
mul(4,4);
var op = mul(4,4);
document.write(op); 