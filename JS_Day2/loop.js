console.log('Loop in js.')

// for loop 
for (let i=1; i<=5; i++){
    console.log('Js Learning From Apna College!')
}


// // sum the number 
let sum = 0;
for (let i=1; i<=5 ; i++){
    sum = sum + i;
}
console.log('Sum is: ',sum);


// console.log('While Loop.')
let i = 1;
while (i <=10){
    console.log('Apna Colege - using while loop');
    i++;
}


// for of loop -- iteration above string and array 
let name = "shakirUllah"
for (const element of name) {
    console.log(element);
}

// forin loop - iterate above the object 
const Student = {
    name: 'Harry',
    age: 21,
    city: 'Taxila',
    isPass: true,
};

for (let key in Student){
    console.log('Key is: ',key ,":Value is: ",Student[key]);
}