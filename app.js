const time = document.querySelector('.time')

// let test = new Date()
// let test 2 =
// console.log(Date.now());

const mili = 23423425;

const seconds = Math.floor((mili / 1000) % 6)

const minutes = Math.floor((mili / 1000 / 60) % 60);

const hours = Math.floor((mili / 1000 / 60 / 60) % 24);

let test = Date.now();
let x = setInterval(function () {
    let now = new Date().getTime();
    let sec = Math.floor(((now - test) / 1000) % 60);
    let min = Math.floor(((now - test) / 1000 / 60) % 60)
    console.log(min, sec);
    time.innerHTML = `${min}:${sec}`
}, 1000)

// this is how you use maps
// let firstHash = new Map([
//     [1, 'first'],
//     [2, 'second'],
//     [3, 'third']
// ]);

// console.log(firstHash.has(2));
// console.log(firstHash.get(2));
// console.log(firstHash);