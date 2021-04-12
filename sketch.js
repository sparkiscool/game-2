var player,playergroup
var redblock,blueblock,blackblock
function setup(){
playergroup = new Group()
}
function preload(){
createCanvas(400,400)
    
	player = createSprite(20,20,10,10)
	redblock = createSprite(40,40,10,10)
	blueblock = createSprite(60,60,10,10)
	blackblock = createSprite(80,80,10,10)
}
function draw(){
	background("white")
	
	playerfunc()
drawSprites()
}

function playerfunc(){
	player.velocityY = 0
	player.velocityX = 0
	if(keyDown("A")){
		player.velocityX = -3
	}
	if(keyDown("s")){
		player.velocityY = 3
	}
	if(keyDown("d")){
		player.velocityX = 3
	}
	if(keyDown("w")){
		player.velocityY = -3
	}

}

