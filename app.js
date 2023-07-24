const time = document.querySelector('.time')
const start = document.querySelector('.start-stop');
const press = document.querySelector('.press');
// let test = new Date()
// let test 2 =
// console.log(Date.now());

const mili = 23423425;

const seconds = Math.floor((mili / 1000) % 6)

const minutes = Math.floor((mili / 1000 / 60) % 60);

const hours = Math.floor((mili / 1000 / 60 / 60) % 24);

let active = true;

let countDownDate = new Date().getTime() + (((1000 * 60) * 25) + 1000)
//let countDownDate = new Date().getTime() + 5000;
function begin() {
    let x = setInterval(function () {

        let now = new Date().getTime();
        let distance = countDownDate - now;

        let min = Math.floor((distance / 1000 / 60) % 60)

        let sec = Math.floor((distance / 1000) % 60)
        let tempSec = sec.toString();
        let tempMin = min.toString();

        if ((tempSec.length = 2) && (tempMin.length < 2)) {
            time.innerHTML = `0${min}:${sec}`;
        } else if ((tempSec.length < 2) && (tempMin.length < 2)) {
            time.innerHTML = `0${min}:0${sec}`;
        } else if ((tempSec.length < 2) && (tempMin.length = 2)) {
            time.innerHTML = `${min}:0${sec}`;
        } else if ((tempSec.length = 2) && (tempMin.length = 2)) {
            time.innerHTML = `${min}:${sec}`;
        } else if ((tempSec.length = 1) && (tempMin.length = 2)
            && (sec === 0) && (min === 0)) {
            time.innerHTML = `${25}:${'00'}`;
        }


        if ((min === 0) && (sec === 0)) {
            clearInterval(x)
            //countDownDate = new Date().getTime() + (((1000 * 60) * 25) + 1000)
            time.innerHTML = `25:00`
        }

    }, 1000)
}

start.addEventListener('click', () => {
    begin();
    active = !active;
    if (active) {
        press.innerHTML = 'STOP'
    } else {
        press.innerHTML = 'START'

        clearInterval(begin);
    }
});

// this is how you use maps
// let firstHash = new Map([
//     [1, 'first'],
//     [2, 'second'],
//     [3, 'third']
// ]);

// console.log(firstHash.has(2));
// console.log(firstHash.get(2));
// console.log(firstHash);