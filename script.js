const btnStart = document.querySelector(".btnStart")
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector(".clouds")
const gameover = new Audio ('./sons/game-over.mp3')
const pulo = new Audio ('./sons/pulo.mp3')
const somdefundo = new Audio ('./sons/som-de-fundo.mp3')
const btnRestart = document.querySelector(".btnRestart")
const score = document.querySelector(".score")

let count = 0 
let scorePoitns

somdefundo.loop = true 

const jump = () => {
    mario.classList.add('jump');
    pulo.play()

    setTimeout(() => {

        mario.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', jump);

btnStart.addEventListener("click", ()=>{
    document.querySelector('.game-start').remove()
    pipe.classList.add("activePipe")
    clouds.classList.add("activeClouds")
    somdefundo.play()
    scorePoitns = setInterval (() => {
        count ++
        score.innerHTML = `SCORE: ${count}`
    },100)
})

btnRestart.addEventListener("click", ()=>{
    location.reload()
})

const loop = setInterval(() => {
  
    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '')
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;    
        mario.src = './imgs/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clouds.style.right = `${cloudsPosition}px`
        pipe.classList.remove("activePipe")
        clouds.classList.remove("activeClouds")
        clearInterval(loop);
        somdefundo.pause()
        gameover.play()
        document.querySelector('.game-over').classList.add("game-over__start")
        clearInterval(scorePoitns)
    } 

}, 10);

