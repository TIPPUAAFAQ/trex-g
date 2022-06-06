
var vase,vase1;

var flower4,flower1,flower2,flower3,flower5,flower6,flower7,f1,f2,f3,f4,f5,f6,f7; 

var score=0,speed=5; 

function preload(){
vase1=loadImage("b1.png");

f1=loadImage("f1.png");
f2=loadImage("f2.png");
f3=loadImage("f3.png");
f4=loadImage("f4.png");
f5=loadImage("f5.png");
f6=loadImage("f6.png");
f7=loadImage("f7.png");
}

function setup() {

  createCanvas(1200,400)

  score=0

  //creating vase
  vase=createSprite(600,300,0,0);
  vase.addImage("vase",vase1);
  vase.scale=0.40;

 //hi  
  vase.setCollider("Circle",0,0,10);
  vase.debug=true;

//creating flower1
 flower1=createSprite(600,140);
 flower1.addImage("flo",f1);
 flower1.scale=0.26;

//creating flower2
flower2=createSprite(400,140);
flower2.addImage("flo",f2);
flower2.scale=0.26; 

//creating flower3
flower3=createSprite(200,140);
flower3.addImage("flo",f3);
flower3.scale=0.26;

//creating flower4
flower4=createSprite(800,140);
flower4.addImage("flo",f4);
flower4.scale=0.26;

//creating flower4
flower5=createSprite(1000,140);
flower5.addImage("flo",f5);
flower5.scale=0.6;

//creating flower4
flower6=createSprite(1160,140);
flower6.addImage("flo",f6);
flower6.scale=0.26;

//creating flower4
flower7=createSprite(40,140);
flower7.addImage("flo",f7);
flower7.scale=0.26;
}



function draw() {
  //set background color
  background("lightblue");

  
vase.x=World.mouseX;

createEdgeSprites()

createEdgeSprites()

 flower1.x=flower1.x+speed
 flower2.x=flower2.x-speed
 flower3.x=flower3.x+speed
//flower1.y=flower1.y+speed

/*if(keyDown("space")){
flower1.y=flower1.y+3
}*/
  drawSprites();
}














