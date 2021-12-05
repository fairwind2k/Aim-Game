const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector("#time");
const board = document.querySelector('#board');
const colors = ['#7FFFD4', '#00FFFF', '#F0FFFF', '#0000FF' , '#FFFF00' , '#8A2BE2', '#6495ED', '#FF00FF', '#FFFAF0', '#E0FFFF',
'#9370DB', '#FF00FF', '#7B68EE', '#FFE4E1', '#008080', '#FFD700' ];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');

})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }

})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);

}

function decreaseTime() {
    if (time === 0) {
        finishGame();

    } else {
        let current = --time;
        if (current < 10) {
            current= `0${current}`;
    }
    setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}
 function finishGame() {
     timeEl.parentNode.classList.add('hide');
     board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
    //  board.style.flexDirection = `column`;
    //  createLink();
    //  clickLink();
            
 }

 function createRandomCircle() {
     const circle = document.createElement('div');
     const size = getRandomNumber(10, 60);
     const {width, height} = board.getBoundingClientRect();
     const color1 = getRandomColor();
     const color2 = getRandomColor();

     const x = getRandomNumber(0, width - size);
     const y = getRandomNumber(0, height - size);

     circle.classList.add('circle');
     circle.style.width = `${size}px`;
     circle.style.height = `${size}px`;
     circle.style.top = `${y}px`;
     circle.style.left = `${x}px`;
     circle.style.background = `linear-gradient(118.38deg, ${color1} -4.6%, ${color2} 200.44%`;

     board.append(circle);
 }

 function getRandomNumber(min, max) {
     return Math.round(Math.random() * (max - min) + min);
 }

 function getRandomColor() {
     return colors[Math.floor(Math.random() * colors.length)];
}

function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle');

        if (circle) {
            circle.click();
        }
    }

    setInterval(kill, 42);
}

// function createLink() {
//     const link = document.createElement('a');
//     link.setAttribute('href', '#');
//     link.setAttribute('id', 'play');
//     link.classList.add('play');
//     link.innerHTML = 'play again';
//     board.appendChild(link);
// }

// function clickLink() {
//     const linkPlay = document.querySelector('#play');    
//     linkPlay.addEventListener('click', event => {
//             event.preventDefault();
//             console.log('tutu');
//             event.target.remove();
//             screens[2].classList.add('up');
//             screens[0].classList.remove('up');
//             screens[1].classList.remove('up');


//             // startGame();
                            
        
//         });
// }

