const audioElement = document.getElementById('player');
const start = document.getElementById('start');
const container = document.getElementById('gameContainer');
const title = document.getElementById('title');
const winMessage = document.getElementById('winMessage');
const gameOver1 = document.getElementById('gameOver');
const playAgain = document.getElementById('again');
let boxes = document.getElementsByClassName('box');
let healthBar = document.getElementsByClassName('life');
const lives = 'lives left:';
let hp = 3;

function playMusic() {
    audioElement.play();
    audioElement.addEventListener('ended', function(){
            this.currentTime = 0;
            this.play();
        });
    }

function pauseMusic(){
    audioElement.pause();
}

function volumeUp(){
    audioElement.volume += 0.1;
}

function volumeDown(){
    audioElement.volume -= 0.1;
}


start.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('game background.jpg')";
    container.style.visibility = 'visible';
    title.innerHTML = 'Choose the right color!';
    title.style.fontFamily = 'chewy';
    start.innerHTML = boxes[Math.floor(Math.random() * boxes.length)].style.backgroundColor;
    start.style.fontFamily = 'chewy';
    healthBar[0].innerHTML = lives + hp;
});

function generateRandomColor(){
    let symbols = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color = color + symbols[Math.floor(Math.random() * symbols.length)];
    }
 return color;

}
function changeBoxColor(){
for(let i = 0; i < 6; i++){
    boxes[i].style.backgroundColor = generateRandomColor();
  }}

    Array.from(boxes,box => {
   box.addEventListener('click', function(){
        if(winMessage.style.visibility == 'visible'){
            return;
        }
        else if(start.innerHTML == box.style.backgroundColor){  
            winMessage.innerHTML = 'You Win!';
            winMessage.style.visibility = 'visible';
            playAgain.style.visibility = 'visible';
        }else if (start.innerHTMl != box.style.backgroundColor){
            hp -- ;
            healthBar[0].innerHTML = lives + hp;
            gameOver();
    }
  })
  });

  function gameOver(){
    if(hp <= 0){
        console.log('hp is 0')
        container.style.visibility = 'hidden';
        gameOver1.style.visibility = 'visible';
        playAgain.style.visibility = 'visible';
        winMessage.style.visibility = 'hidden';
    }
  }

  function newGame(){
    document.body.style.backgroundImage = "url('game background.jpg')";
    container.style.visibility = 'visible';
    title.innerHTML = 'Choose the right color!';
    title.style.fontFamily = 'chewy';
    start.style.fontFamily = 'chewy';
    hp = 3;
    healthBar[0].innerHTML = lives + hp;
    gameOver1.style.visibility = 'hidden';
    playAgain.style.visibility = 'hidden';
    winMessage.style.visibility = 'hidden';
    changeBoxColor()
    start.innerHTML = boxes[Math.floor(Math.random() * boxes.length)].style.backgroundColor;
  
    
  }
