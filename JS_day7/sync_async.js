console.log('Sync Function')
console.log('Start')
console.log('Task 1')
console.log('Task 2')
console.log('Task 3')
console.log('End!')


console.log('Async Function - without - Await')

console.log('Start')

setTimeout (() => {
    console.log('Async Function Tasking the time!')
}, 5000);

console.log("End!")



console.log('Async with Await')
async function getdata() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data);
}

getdata();


// post request in the call back with the awiat 
const myHeader = new Headers();
myHeader.append('Content-Type', 'application/json');

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: 'POST',
    headers: myHeader,
    body: JSON.stringify({username: 'John Doe' }),
}

async function getdata_post() {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

getdata_post();