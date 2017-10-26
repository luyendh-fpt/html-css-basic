var canvas = document.getElementById("my-canvas");
var context = canvas.getContext("2d");
var sound = document.getElementById("audio");
var moveSound = document.getElementById("move");
sound.play();
var x = 0;
var y = 0;
var width = 30;
var height = 30;
var step = 5;

var tankImg = new Image();
tankImg.onload = function() {	
    context.drawImage(tankImg, x, y, width, height);
}
tankImg.src = "img/tank_player1_right_c0_t1.png";

function moveUp(){		
	context.clearRect(x, y, width, height);
	y -= step;
	tankImg.src = "img/tank_player1_up_c0_t1.png";
	moveSound.play();
	context.drawImage(tankImg, x, y, width, height);
}

function moveDown(){
	context.clearRect(x, y, width, height);
	y += step;
	tankImg.src = "img/tank_player1_down_c0_t1.png";
	moveSound.play();
	context.drawImage(tankImg, x, y, width, height);
}

function moveLeft(){
	context.clearRect(x, y, width, height);
	x -= step;
	tankImg.src = "img/tank_player1_left_c0_t1.png";
	moveSound.play();
	context.drawImage(tankImg, x, y, width, height);
}

function moveRight(){
	context.clearRect(x, y, width, height);
	x += step;
	tankImg.src = "img/tank_player1_right_c0_t1.png";
	moveSound.play();
	context.drawImage(tankImg, x, y, width, height);
}

window.addEventListener('keydown', function (e) {
    if(e.keyCode == 37){
    	moveLeft();
    }else if(e.keyCode == 38){
    	moveUp();
    }else if(e.keyCode == 39){
    	moveRight();
    }else if(e.keyCode == 40){
    	moveDown();
    }
})

