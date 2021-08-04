var trex,trex_running
var edges
var ground,groundImage
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage = loadImage("ground2.png")

}
function setup(){
createCanvas(600,200)

trex = createSprite(50,150,10,30)
trex.addAnimation("running",trex_running)
trex.scale = 0.5

edges = createEdgeSprites()

ground = createSprite(10,180,400,20)
ground.addImage("grd", groundImage)
ground.velocityX = -2


}


function draw(){
background("grey")
if(keyDown("space")){
trex.velocityY=-10
}

trex.velocityY = trex.velocityY+0.5

if(ground.x<0){
ground.x=ground.width/2
}

trex.collide(ground)
console.log(trex.y)
drawSprites();

}