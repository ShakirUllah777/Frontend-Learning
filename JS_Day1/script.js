console.log('Well come to Js Learning...');

console.log('Variable in JS.');

name = "Shakir Ullah";
age = 21;
weight = 55.6
isStudent = true;
Married = false;

console.log(name)
console.log(age)
console.log(weight)
console.log(isStudent)
console.log(Married)


console.log('Ways to declearde the variable.');
console.log('Let - ik dfa declared ho gya to pr nhi kr sakty lakin value change ho sakti hay.');
let fullName = 'Shakir Ullah';
// let fullName = 'Shakir Ullah' this will give the error in js console
fullName = 'Ahmed malik'

console.log('Const - constant variable and valude 2no change nhi ho sakti.')
const country = "Pakisan";
// country = 'india'; Error in consloe 
console.log(country)

console.log('Objects in js - store multiple values')
let Student =  {
    name : 'harry',
    age : 21,
    country : 'pakistan',
    carrer : 'developer'
};

Student['age'] = Student['age'] + 1;

console.log(Student)