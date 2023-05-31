
 //write a program to print function
 
//  function sum(a,b){
//     var s1= a + b;
//     var s2=a*b;
//     return [s1,s2];
// }

// console.log(sum(5,6));

// // Anonymous function

// var sum1 =function(a,b){
//     var s3 = a+b;
//     var s4 = a-b;
//     var s5 = a*b;
//     var s6 = a/b;
//     return [s3,s4,s5,s6];
// }

// console.log(sum1(6,7));

//immediately invoked function expression

// console.log(function(a, b) {
//     var s7 = a + b;
//     var s8 = a - b;
//     var s9 = a * b;
//     var s10 = a / b;
 
//     return [s7, s8, s9, s10];
//   }(8, 9));
  

//arrow function

//  sum = (x,y) => {
//     sum = x+y;
//     return sum;
// }

// var r1 = sum(5,8);
// console.log(r1);

// function to function another as argument

// function f1(fun2, x, y) {
//     var result = fun2(x, y);
//     return result;
// }

// var r5 = function(x, y) {
//     var sum = x + y;
//     return sum;
// }

// var r6 = function(x, y) {
//     var difference = x - y;
//     return difference;
// }

// var r9 = function(x,y){
//     var mult = x*y;
//     return mult;
// }

// var r10 = function(x,y){
//     var div =x/y;
//     return div;
// }

// var r7 = f1(r5, 6, 7);
// console.log(r7);

// var r8 = f1(r6, 8, 5);
// console.log(r8);

// var r11 = f1(r6, 4, 5);
// console.log(r11);

// var r12 = f1(r6, 2, 5);
// console.log(r12);

var sum=function(x,y){
    var r1 = x+y;
    return r1;
    }
    
    function f2(){
    console.log("inside f1 function");
    return sum;
    }
    
    function f3(){
    console.log("inside f3 function");
    return  function(x,y){
    var r1 = x+y;
    return r1;
    }
    }
     
    var fun1 = f2();
    var r2= fun1(5);
    console.log(r2);
    
    var fun2 = f3();
    var r3 = fun2(10);
    console.log(r3);