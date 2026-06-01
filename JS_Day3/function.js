console.log('Function in javascript');

// simple function 
function wellCome() {
    console.log("WellCome to our website!");
}

wellCome()
wellCome()

// Parameter function 
function SumNum (a, b){
    sum = a + b ;
    return sum;
}

let num = SumNum(1,2)
let num1 = SumNum(10,20)
console.log('Sum of number uisng the function is:',num)
console.log('Sum of number uisng the function is:',num1)


// Arrow function 
const MulNum = (a, b) => {
    mul = a * b;
    return mul;
}

let numMl = MulNum(2,3)
console.log('Multiple of number is: ',numMl)


// forEach fun in js - used to loop over array in easy way and also take the fun as parameter
console.log('forEach fun in js ')
let fruits = ['Apple', 'chery', 'Bnana', 'arrow']

fruits.forEach((val) => {
    console.log(val);
});


// Pratic question
// Create a function that takes three numbers and returns the largest one.

function FindGreatest(a,b,c) {
    if(a > b & a > c){
        return a;
    }else if (b > a & b > c){
        return b;
    }else{
        return c;
    }
}

let threeNum = FindGreatest(10,50,30)
console.log(`The Gratest Number is ${threeNum}`)

// Create a function that takes a number and returns "Even" or "Odd".
function FindED (num) {
    if(num % 2 == 0){
        return 'number is Even';
    }else{
        return 'Number is Odd';
    }
}

let usernum = FindED(22)
console.log(usernum)