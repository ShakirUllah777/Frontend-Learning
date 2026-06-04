// // Even in js learning 

// let btn1 = document.querySelector(".btn");

// btn1.onclick = () => {
//     console.log('Btn1 was clicked!');
//     let a = 25;
//     a++;
//     console.log(a);
// }

// btn1.addEventListener('click', () => {
//     console.log('Btn1 was click - by eventlistner.');
// })



let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currmode = "dark";
body.classList.add("dark");

modebtn.addEventListener("click", () => {
    if (currmode === "dark") {
        currmode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        currmode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    }

    console.log(currmode);
});