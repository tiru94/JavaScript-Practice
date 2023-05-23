// statements //

var a=10;
var b=10;
var c=a+b;

console.log(c);



// average of numbers //

var a=20;
var b=30;
var c=40;
var d=(a+b+c)/3;

console.log(d);

// simple interest //

var p = 10;
var n = 15;
var r = 50;

var intrest = (p*n*r)/100;

console.log(intrest);


// and , or operator //

var x=40;
var y=20

var result =((x<y)||(x==40)&&(y==20));

console.log(result);

//not equal to //
var x=40;
var y=20

var result = ! ((x<y)||(x==40)&&(y==20));

console.log(result);


// odd number program //

var a = 1;
var b = 10;

for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
    console.log(i); 
  }
}
// even program //

var a = 1;
var b = 10;

for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
    console.log(i); 
  }
}


// if and else //

num = 8;

if (num % 2 === 0) {
  console.log(num + ' is an even number');
} else {
  console.log(num + ' is an odd number');
}