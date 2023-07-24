
let countDownDate = new Date("July 23, 2023 11:00:00").getTime();

// setInterval(() => {
//     let now = new Date().getTime();
//     let distance = countDownDate - now;

//     let minutes = Math.floor((distance / 1000 / 60) % 60)

//     let seconds = Math.floor((distance / 1000) % 60)

//     console.log(minutes, seconds)
// }, 1000);

let secCalculation = 1000 * 60;

let twentyFive = Math.floor((((secCalculation / 1000) / 60) % 60) * 25);

let mili = (1000 * 60);
let second = Math.floor((mili / 1000) % 60);
let start = new Date("July 23, 2023 00:00:00");
let end = new Date("July 23, 2023 00:25:00");
let distance = end - start;
let minus = 0;
let timePassed = Math.floor((distance / 1000 / 60) % 60);

console.log(timePassed);
setInterval(() => {
    timePassed = distance - mili;

    let minus = minus + mili;

    console.log(timePassed, mili);
    mili = mili - 1000;
}, 1000)