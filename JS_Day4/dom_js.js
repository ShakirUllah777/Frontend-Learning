// console.log('Dom in js')

let head = document.querySelector('h1')
console.log(head.innerText)  // innterText just print the content 

// slect my id & class 
// let head2 = document.querySelector('.heading')
// console.log(head2)

let head3 = document.getElementsByClassName('heading')
console.log(head3)

let para = document.querySelectorAll('p')
console.log(para)


let divs = document.querySelectorAll(".box")

let index = 1;
for (div of divs){
    div.innerText = `New unique value ${index}`;
    index++;
}